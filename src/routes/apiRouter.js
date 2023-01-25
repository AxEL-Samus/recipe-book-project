import express from 'express';
import { Recipe } from '../../db/models';

const entriesRouter = express.Router();

// entriesRouter.get('/', async (req, res) => {
//   const entries = await Recipe.findAll();
//   const initState = { entries };
//   res.render('Layout', initState);
// });

entriesRouter.get('/:id', (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.log(error);
  }
});

export default entriesRouter;
