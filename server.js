const express = require ('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = 3009;
const employersRouter = require('./router/employerRouter');

const app = express();


app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));


app.get('/', (req,res) => {
  res.send("hello guys");
});

app.use('/employers/', employersRouter);

app.listen(PORT, () => {
  console.log(`[*] listening on port ${PORT}`)
});
