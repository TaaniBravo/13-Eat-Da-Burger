const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3030;

const router = require('./controllers/burgersController')

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(router)

app.listen(PORT, () => {
    console.log("App listening on http://LocalHost:" + PORT);
})