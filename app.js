const express = require('express')
// const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port =process.env.PORT;

// Handlebars
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
// Servir contenido estatico
app.use(express.static('public'));
// app.get('/',  (req, res)=> {
//     res.send('Home page');
// });
app.get('/',  (req, res) =>{
    res.render('home', {
        nombre: 'Harol Castigliones',
        titulo: 'Curso Node '
    });
});

app.get('/generic',  (req, res) =>{
    res.render('generic', {
        nombre: 'Harol Castigliones',

        titulo: 'Curso Node '
    });
});
// app.get('/generic',  (req, res) =>{
//     res.sendFile(__dirname + '/public/generic.html');
// });
app.get('/elements',  (req, res) =>{
    res.render('elements', {
        nombre: 'Harol Castigliones',

        titulo: 'Curso Node '
    });
});
// app.get('/elements',  (req, res) =>{
//     res.sendFile(__dirname + '/public/elements.html');
// });
app.get('*',  (req, res)=> {
    res.sendFile(__dirname + '/public/404.html');
});

// app.get('*',  (req, res)=> {
//     res.send('404|page not found');
// });

app.listen(port, () => {
    console.log(`Example app listening at hhtp://localhost:${port}`)
})