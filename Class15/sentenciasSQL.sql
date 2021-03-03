
/* Creacion de bases de datos */
CREATE DATABASE test_manager_pwi2;

/* Creacion de bases de datos con UTF8 SPANISH2 CI*/
CREATE DATABASE dbname CHARACTER SET utf8 COLLATE utf8_spanish2_ci;

/* Creacion de tablas */
CREATE TABLE usuarios ( 
    id_usuario INT(11) PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(40) NOT NULL, 
    role TINYINT(1) DEFAULT 1,
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    disponible TINYINT(1) NOT NULL DEFAULT 1 
);

/* Sentencia INSERT */
INSERT INTO usuarios (email, password, role) VALUES ('matisuez@gmail.com', '123456', 1);
INSERT INTO usuarios (email, password, role) VALUES ('matisuez@gmail.com', '123456', 1), (...), (...);

/* Sentencia UPDATE */
UPDATE usuarios SET email = 'suezmatias@utn.com', password = '12345678910', role = 2 WHERE id_usuario = 1;

/* Eliminacion Logica */
UPDATE usuarios SET disponible = 0 WHERE id_usuario = 1;

/* Sentencia DELETE */
DELETE FROM usuarios WHERE id_usuario = 1;

/* Sentencia SELECT */
SELECT * FROM usuarios;
SELECT * FROM usuarios WHERE role = 1;
SELECT * FROM usuarios WHERE disponible = 1;
SELECT
	id_usuario,
    email,
    role,
    create_date,
    update_date
FROM `usuarios` WHERE ... ; /* where opcional */

/* INNER JOIN, ORDER BY, GROUP BY, BETWEEN */
/* INNER JOIN => LEFT JOIN, RIGHT JOIN */
SELECT 
	U.id_usuario,
    U.email,
    P.date_created
FROM
	usuarios U
   	INNER JOIN pedidos P
    ON U.id_usuario = P.id_usuario
WHERE
	U.disponible = 1;
/* GROUP BY */
SELECT 
	U.email AS Email,
    P.id_pedido AS `ID Pedido`,
    P.date_created AS Fecha,
    SUM(DP.cantidad * DP.precio) AS Total
FROM
	usuarios AS U 
    INNER JOIN pedidos AS P
    ON U.id_usuario = P.id_usuario
    INNER JOIN detalle_pedidos AS DP
    ON P.id_pedido = DP.id_pedido
WHERE
	U.disponible = 1
GROUP BY 
	P.id_pedido;

/* Otro ejemplo de group by */
SELECT
	U.id_usuario AS `ID Usuario`,
	U.email AS Email,
    COUNT(P.id_pedido) AS `Cantidad de pedidos`
FROM
	usuarios AS U 
    INNER JOIN pedidos AS P
    ON U.id_usuario = P.id_usuario
WHERE
	U.disponible = 1
GROUP BY
	U.id_usuario,
    U.email;

/* ORDER BY */
SELECT * FROM usuarios U
ORDER BY U.id_usuario DESC; /* ASC / DESC */

/* BETWEEN siempre dentro del WHERE */
SELECT * FROM 
    pedidos P 
WHERE 
    P.date_created 
    BETWEEN '2021-03-01' AND '2021-03-03'; /* Toma por defaul la hora 00:00:00 */

/* Operadores logicos: =, <>, OR, AND */
SELECT * FROM usuarios U WHERE U.email <> 'matisuez@gmail.com';
SELECT * FROM usuarios U WHERE U.email LIKE '%@gmail.com' OR U.email LIKE '%@yahoo.com';
SELECT * FROM usuarios U WHERE U.email LIKE '%@gmail.com' AND U.id_usuario = 1;

/* Like '%palabra%', 'matiasuez@_t_'  */
SELECT * FROM `usuarios` AS U WHERE U.email LIKE '%@gmail.com%';
SELECT * FROM `usuarios` AS U WHERE U.email LIKE '_atias%';

/* LEFT JOIN */
SELECT * FROM pedidos P 
LEFT JOIN detalle_pedidos DP 
ON P.id_pedido = DP.id_pedido 
WHERE P.id_pedido = 4;

/* RIGHT JOIN */
SELECT * FROM pedidos P 
RIGHT JOIN detalle_pedidos DP 
ON P.id_pedido = DP.id_pedido 
WHERE DP.id_pedido = 5;