// import express from 'express';

// const router = express.Router();

// router.get('/', async (req, res) => res.redirect('/home'));

// export default router;

import express from "express";
import {Recipe, Full} from '../../db/models'

const router = express.Router();

router.get("/", async (req, res) => res.render("Layout"));

router.get("/login", (req, res) => {
  res.render("Layout");
});

router.get("/signup", (req, res) => {
  res.render("Layout");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("user_sid");
  res.redirect("/");
});

router.get('/collection', (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.log(error);
  }
});

router.get("/collection/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const collection = await Full.findAll({ where: { userId: userId } });
    res.json(collection);
  } catch (error) {
    console.log(error);
  }
});


export default router;