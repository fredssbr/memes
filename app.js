const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  //res.render('maintenance.hbs');
  next();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Welcome to my website',
    likes: [
        'Running',
        'Sleeping (rarely)',
        'Photography'
    ]
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
      pageTitle: 'About page'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
      pageTitle: 'Projects',
      projects: [
          'Running ultras',
          'Playing the piano',
          'Part-time hitman =) (behave)'
      ]
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

//Helpers
hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});