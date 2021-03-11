
const pool = require('../utils/db');
const {
    DB_T_USERS,
    DB_T_ROLES
} = process.env;

const getAllUsers = async(table_name) => {
    try {

        const query = `
            SELECT 
                id_user,
                email,
                password,
                role
            FROM 
                ${DB_T_USERS}
            WHERE 
                available = 1`;
                
        const result = await pool.query(query);

        return result;
    } catch (error) {
        throw error;
    }
}

const getRoles = async() => {
    try {
        
        const query = `
            SELECT
                id_role,
                detail
            FROM
                ${DB_T_ROLES}
            WHERE
                available = 1`;
        
        return await pool.query(query);

    } catch (error) {
        throw error;
    }
}

const insertUser = async(obj) => {
    try {
        
        const query = `
            INSERT INTO ${DB_T_USERS} SET ?
        `;

        return await pool.query(query, [obj]);

    } catch (error) {
        throw error;
    }
}

const getSingleUser = async(id) => {
    try {
        const query = `
            SELECT
                id_user,
                email,
                password,
                role
            FROM
                ${DB_T_USERS}
            WHERE
                id_user = ?
                AND
                available = 1
        `;

        return await pool.query(query, [id])

    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllUsers,
    getRoles,
    insertUser,
    getSingleUser
}

