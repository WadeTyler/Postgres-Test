const pool = require('./pool');

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsername(value) {
    const query = `SELECT * FROM usernames WHERE username LIKE '%' || $1 || '%'`;
    const { rows: usernames } = await pool.query(query, [value]);
    return usernames;
}

async function deleteAllUsers() {
    await pool.query("DELETE FROM usernames");
}

module.exports = {
    getAllUsernames,
    insertUsername,
    searchUsername,
    deleteAllUsers
};