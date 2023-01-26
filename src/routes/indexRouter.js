import express from 'express';
import Layout from '../components/Layout';

const router = express.Router();

router.get('/', async (req, res) => res.render('Layout'));

export default router;