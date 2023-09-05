import { Request, Response } from 'express';
import { createQuote,  } from '../db/quotes'; // Replace with the correct path to your quote model
import { getQuotes } from '../db/quotes';
import { getUserById } from '../db/users';
import express from "express"


interface CustomRequest extends express.Request {
  identity: {
    _id: string; // Adjust the type of _id as per your User schema
    // Other user-related properties if needed
  };
}
// Controller function for creating a new quote
export const createNewQuote = async (req: CustomRequest, res: Response) => {
  try {
    const { text, author } = req.body; // Assuming you send these fields in the request body
     // Create a new quote and automatically associate it with the logged-in user
     const userId = req.identity._id;
     const user = await getUserById(userId)

     if (!user) {
      return res.sendStatus(404); // User not found
    }
    
     const quote = await createQuote({ 
      
      text, 
      author,
      user: userId
    });

    // Send a success response with the created quote
    res.status(201).json(quote);
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error creating quote:', error);
    res.sendStatus(500); // Using sendStatus to send a 500 (Internal Server Error) response
  }
};

export const myQuotes = async (req: CustomRequest, res: express.Response)=> {
 

   try {
 const userId = req.identity._id
 const quotes = await getQuotes({user:userId})
 return res.status(200).json({
  message: 'Quotes retrieved successfully',
  quotes,
});

   }catch (error) {
    return res.sendStatus(400)

   }
}