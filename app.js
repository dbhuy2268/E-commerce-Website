const express = require("express");

const app = express();

// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://dbhuy:30061999Nhoz@cluster0-uadza.mongodb.net/sample-web', { useNewUrlParser: true, useUnifiedTopology: true })

// mongoose.connection.on('connected', function () {
//     console.log("DB ALL COOL")
// })



app.use(express.static(__dirname + '/public'))
let helper = require('./controllers/helper')
const expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        createStarList: helper.createStarList,
        createStars: helper.createStars
    }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use('/', require('./routes/indexRouter'));
app.use('/products', require('./routes/productRouter'));

app.get('/blog', function (req, res) {
    res.render('blog', { banner: 'Our Blog', webTitle: 'Aroma Shop - Blog' });
})

app.get('/cart', function (req, res) {
    res.render('cart', { banner: 'Cart', webTitle: 'Aroma Shop - Cart' });
})

app.get('/checkout', function (req, res) {
    res.render('checkout', { banner: 'Check Out', webTitle: 'Aroma Shop - Check Out' });
})

app.get('/confirmation', function (req, res) {
    res.render('confirmation', { banner: 'Confirmation', webTitle: 'Aroma Shop - Confirmation' });
})

app.get('/contact', function (req, res) {
    res.render('contact', { banner: 'Contact Us', webTitle: 'Aroma Shop - Contact' });
})

app.get('/register', function (req, res) {
    res.render('register', { banner: 'Register', webTitle: 'Aroma Shop - Register' });
})

app.get('/single-blog', function (req, res) {
    res.render('single-blog', { banner: 'Blog', webTitle: 'Aroma Shop - Blog page' });
})

app.get('/tracking-order', function (req, res) {
    res.render('tracking-order', { banner: 'Ongoing Order', webTitle: 'Aroma Shop - Your Order' });
})

app.get('/login', function (req, res) {
    res.render('login', { banner: 'Login', webTitle: 'Aroma Shop - Login' });
})

app.get('/sync', function (req, res) {
    let models = require('./models');
    models.sequelize.sync()
        .then(function () {
            res.send('db sync completed')
        });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log(`haha, listening on ${app.get('port')}`);
});