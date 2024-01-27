import express from 'express';
const router = express.Router()

router.get('/', (req, res) => {
        res.render('projects', {
            layout: 'default',
            pageTitle: 'Projects',
            projects: [
                'Running ultras',
                'Playing the piano',
                'Part-time hitman =) (behave)'
            ]
        });
});

export { router };