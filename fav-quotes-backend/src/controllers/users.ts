import express from 'express';

import { deleteUserById, getUsers, getUserById,getUserBySessionToken } from '../db/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const getLoggedInUser = async (req: express.Request, res: express.Response) => {
    try {
    
      const sessionToken = req.cookies['QUOTECUBE-AUTH'];
  
      if (!sessionToken) {
        return res.sendStatus(401); // Session token not found in the cookie
      }
  
      
      const user = await getUserBySessionToken(sessionToken);
  
      if (!user) {
        return res.sendStatus(401); // User not found or invalid session token
      }
  
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);
    
    user.name = name;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}