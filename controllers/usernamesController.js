const db = require("../db/queries");

exports.getUsernames = async (req, res) => {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
};

exports.getNewForm = async (req, res) => {
    res.render('form');
};

exports.postNewUsername = async (req, res) => {

    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect('/');
}

exports.searchWithValue = async (req, res) => {
    const value = req.params.value
    console.log(value);
    const usernames = await db.searchUsername(value);
    console.log(usernames);
    res.send(`Usernames with ${value}: ` + usernames.map(user => user.username).join(", "));
}

exports.deleteAllUsers = async (req, res) => {
    await db.deleteAllUsers();
    console.log("Database Cleared");
    res.redirect('/');
}