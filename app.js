const express = require('express');
const app = express();
const usernamesRoute = require('./routes/usernames');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));
app.use('/', usernamesRoute);

app.listen(8080, () => {
    console.log("Express app listening on port 8080");
});