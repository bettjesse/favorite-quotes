import express from 'express';

import { getUserByEmail, createUser } from '../db/users';
import { authentication, random } from '../helpers';

export const register = async (req: express.Request, res: express.Response) => {
    try {
      const { email, password, name } = req.body;
  
      if (!email || !password || !name) {
        return res.sendStatus(400);
      }
  
      const existingUser = await getUserByEmail(email);
    
      if (existingUser) {
        return res.sendStatus(400);
      }
  
      const salt = random();
      const user = await createUser({
        email,
        name,
        authentication: {
          salt,
          password: authentication(salt, password),
        },
      });
  
      return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
      }
    }