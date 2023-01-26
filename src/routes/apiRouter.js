import express from 'express';
import { Recipe } from '../../db/models';

const recipeRouter = express.Router();

recipeRouter.get('/', async (req, res) => {
  const recipes = await Recipe.findAll();
  const initState = { recipes };
  res.render('Layout', initState);
});

export default recipeRouter;