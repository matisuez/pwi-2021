

const obtenerUsuarios = () => {
    try {
        const sql = 'SELECT * from usuarios';
        const usuarios = [
            { email: 'matisuez@gmail.com', name: 'Matias' }
        ];
        return usuarios;
    }catch (error) {
        throw error;
    }
}

module.exports = {
    obtenerUsuarios
}