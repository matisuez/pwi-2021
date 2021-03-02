
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
SELECT
	id_usuario,
    email,
    role,
    create_date,
    update_date
FROM `usuarios` WHERE ... ; /* where opcional */


