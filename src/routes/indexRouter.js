import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => res.redirect('/home'));

export default router;