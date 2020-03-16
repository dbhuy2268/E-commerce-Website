const express = require("express");

const app = express();

// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://dbhuy:30061999Nhoz@cluster0-uadza.mongodb.net/sample-web', { useNewUrlParser: true, useUnifiedTopology: true })

// mongoose.connection.on('connected', function () {
//     console.log("DB ALL COOL")
// })



app.use(express.static(__dirname + '/public'))

const expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/blog', function (req, res) {
    res.render('blog', { banner: 'Our Blog' });
})

app.get('/cart', function (req, res) {
    res.render('cart', { banner: 'Cart' });
})

app.get('/category', function (req, res) {
    res.render('category', { banner: 'Item Category' });
})

app.get('/checkout', function (req, res) {
    res.render('checkout', { banner: 'Check Out' });
})

app.get('/confirmation', function (req, res) {
    res.render('confirmation', { banner: 'Confirmation' });
})

app.get('/contact', function (req, res) {
    res.render('contact', { banner: 'Contact Us' });
})

app.get('/register', function (req, res) {
    res.render('register', { banner: 'Register' });
})

app.get('/single-blog', function (req, res) {
    res.render('single-blog', { banner: 'Blog' });
})

app.get('/single-product', function (req, res) {
    res.render('single-product', { banner: 'Product Detail' });
})

app.get('/tracking-order', function (req, res) {
    res.render('tracking-order', { banner: 'Ongoing Order' });
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log(`haha, listening on ${app.get('port')}`);
});