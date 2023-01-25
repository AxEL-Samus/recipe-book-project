import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
//   res.redirect('/home');
  res.render('Layout');
});

export default router;
