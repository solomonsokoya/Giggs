require('dotenv').config()

const express = require ('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const PORT = 3006;
const employersRouter = require('./router/employerRouter');
const workersRouter = require('./router/workersRouter');
const app = express();



app.set('server_secret', process.env.SERVER_SECRET);

app.use(session({
  secret:            app.get('server_secret'),
  resave:            false,
  saveUninitialized: false,
  }));



app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));


app.get('/', (req,res) => {
  res.send('Good to go');
});

app.use('/employers', employersRouter);
app.use('/workers', workersRouter);

app.listen(PORT, () => {
  console.log(`[*] listening on port ${PORT}`)
});
