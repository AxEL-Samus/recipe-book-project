// import express from 'express';

// const router = express.Router();

// router.get('/', async (req, res) => res.redirect('/home'));

// export default router;

import express from "express";

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
export default router;
