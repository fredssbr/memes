import express from 'express';
import { engine } from 'express-handlebars';
const app = express();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.engine( 'hbs', engine({
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname  + '/views/layouts/',
  partialsDir: __dirname  + '/views/partials/',
  helpers: {
    getCurrentYear() { return new Date().getFullYear(); },
    screamIt(text) { return text.toUpperCase(); }
  }
}));

import { router as homeRouter} from './routes/index.js';
import { router as aboutRouter} from './routes/about.js';
import { router as projectsRouter} from './routes/projects.js';

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});