const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

hbs.registerHelper('uppercase', (text) =>{
	return text.toUpperCase();
});



app.get('/',(req, res) =>{

	res.send('Home');

});

app.get('/about',(req, res) =>{

	res.render('about.hbs',{
		title:'About page',
		body:'welcome home!'
	});

});

app.get('/contact',(req, res) =>{

	res.render('contact.hbs',{
			contact:'Contact page!'
		});

});

app.listen(3000);