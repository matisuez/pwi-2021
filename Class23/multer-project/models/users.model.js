
const pool = require('../utils/db');

const readUsers = async() => {
    try {
        
        const query = "SELECT * FROM ?? WHERE available = 1";
        const params = [process.env.DB_T_USERS];
        const result = await pool.query(query, params);
        console.log(result);
        return result;

    } catch (error) {
        throw error;
    }
}

const createUser = async(obj) => {
    try {
        
        const query = "INSERT INTO ?? SET ?";
        const params = [process.env.DB_T_USERS, obj];
        const result = await pool.query(query, params);

        return result;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    readUsers
}
