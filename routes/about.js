import express from 'express';
const router = express.Router()

router.get('/', (req, res) => {
    res.render('about', {
        layout: 'default',
        pageTitle: 'About page',
        myPartial: 'about'
    });
});


export { router };