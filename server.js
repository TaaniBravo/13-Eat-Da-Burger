const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

app.listen(PORT, () => {
    console.log("App listening on http://LocalHost:" + PORT);
})