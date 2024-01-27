import express from 'express';
const router = express.Router()

router.get('/', (req, res) => {
        res.render('home', {
            layout: 'default',
            pageTitle: 'Welcome to my website',
            likes: [
                'Running',
                'Sleeping (rarely)',
                'Photography'
            ]
        });
});


export { router };