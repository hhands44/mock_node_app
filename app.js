// secrets file
require('dotenv').config();

const herokuKey = process.env.APIKey;

const express = require('express');
const ejs = require('ejs');

// const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.use(express.static("public"));


// app.use(session({
//   secret: genkaiKey,
//   resave: false,
//   saveUninitialized: false,
//   store: store
// }));


app.get('/', (req, res) => {
  res.render('home');
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Application is running on ${port}`);
});