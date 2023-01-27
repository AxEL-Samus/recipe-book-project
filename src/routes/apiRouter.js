// import express from 'express';
// import { Recipe } from '../../db/models';

// const recipeRouter = express.Router();

// recipeRouter.get('/', async (req, res) => {
//   const recipes = await Recipe.findAll();
//   const initState = { recipes };
//   res.render('Layout', initState);
// });

// export default recipeRouter;

import express, { response } from "express";
import bcrypt from "bcrypt";
import { User, Recipe, Full } from "../../db/models";
import axios from "axios";

const entriesRouter = express.Router();

entriesRouter.get("/:id", (req, res) => {
  try {
    res.render("Layout");
  } catch (error) {
    console.log(error);
  }
});

entriesRouter.post("/signup", async (req, res) => {
  try {
    const { pass, email, name, login } = req.body;
    const hashpass = await bcrypt.hash(pass, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        pass: hashpass,
        name,
        login,
      },
    });
    console.log(user, created);
    if (!created) {
      return res.status(401).send("Email is already in use");
    }
    req.session.user = user;
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

entriesRouter.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;
    const foundUser = await User.findOne({
      where: { email },
    });
    if (!(foundUser && (await bcrypt.compare(pass, foundUser.pass)))) {
      return res.sendStatus(401);
    }
    const user = JSON.parse(JSON.stringify(foundUser));
    delete user.pass;
    req.session.user = user;
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

entriesRouter.post("/favoristes/:id/:userId", async (req, res) => {
  try {
    const { id, userId } = req.params;
    // console.log(id, 'ewedfwf', userId);
    const recepieArr = await Recipe.findOne({ where: { mealId: id, userId } });
    const object = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => res.data.meals[0]);
    console.log(object);
    const { idMeal, strMeal, strMealThumb } = object;
    const pathtoTable = await Full.findOne({
      where: { userId, idMeal, strMeal, strMealThumb },
    });
    if (recepieArr) {
      await pathtoTable.destroy();
      await recepieArr.destroy();
      res.sendStatus(200);
    } else {
      await Full.create({ userId, idMeal, strMeal, strMealThumb });
      await Recipe.create({ mealId: id, userId });
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
});

entriesRouter.get("/favoristes/:id/:userId", async (req, res) => {
  try {
    const { id, userId } = req.params;
    const state = await Recipe.findOne({ where: { mealId: id, userId } });
    console.log(state);
    if (state != null) {
      res.json(true);
    } else res.json(false);
  } catch (error) {
    console.log(error);
  }
});

export default entriesRouter;
