// import express from 'express';

// const router = express.Router();

// router.get('/', async (req, res) => res.redirect('/home'));

// export default router;

import express from 'express';
import { Recipe } from '../../db/models';

const entriesRouter = express.Router();

entriesRouter.get('/', async (req, res) => {
  const entries = await Recipe.findAll();
  const initState = { entries };
  res.render('Layout', initState);
});

export default entriesRouter;