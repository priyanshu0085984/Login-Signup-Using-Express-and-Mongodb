const express = require('express');
const morgan = require('morgan');
const app = express();
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');

app.use(morgan('tiny'));
app.use(express.json);

app.use('/',signupRouter);
app.use('/login',loginRouter);

module.exports = app;