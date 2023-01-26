import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => res.render('Layout'));

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/signup', (req, res) => {
  res.render('Layout');
});

router.get('/cars', (req, res) => {
  res.render('Layout');
});

export default router;
