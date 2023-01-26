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

entriesRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

export default entriesRouter;
