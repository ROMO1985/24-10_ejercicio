let express = require('express');
let path = require('path')
let app = express();
const mainRoutes= require('./routes/mainRoutes.js');

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine','ejs');
app.use('/',mainRoutes)
app.listen(3001,()=>{console.log(`te conectaste al servidor`)})