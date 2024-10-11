
const { Router } = require('express');
const usernamesController = require('../controllers/usernamesController');
const usernamesRouter = Router();

usernamesRouter.get('/', usernamesController.getUsernames);
usernamesRouter.get('/new', usernamesController.getNewForm);
usernamesRouter.post('/new', usernamesController.postNewUsername);
usernamesRouter.get('/search/:value', usernamesController.searchWithValue);
usernamesRouter.get('/delete', usernamesController.deleteAllUsers);

module.exports = usernamesRouter;