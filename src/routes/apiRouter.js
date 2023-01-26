import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const entriesRouter = express.Router();

entriesRouter.post('/signup', async (req, res) => {
  try {
    const {
      pass, email, name, login,
    } = req.body;
    const hashpass = await bcrypt.hash(pass, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        pass: hashpass, name, login,
      },
    });
    console.log(user, created);
    if (!created) {
      return res.status(401).send('Email is already in use');
    }
    req.session.user = user;
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

entriesRouter.post('/login', async (req, res) => {
  try {
    const { email, pass } = req.body;
    const foundUser = await User.findOne({
      where: { email },
    });
    if (!(foundUser && await bcrypt.compare(pass, foundUser.pass))) {
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

entriesRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

export default entriesRouter;
