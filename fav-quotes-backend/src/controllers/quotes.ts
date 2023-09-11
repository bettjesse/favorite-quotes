import { Request, Response } from 'express';
import { createQuote,  } from '../db/quotes'; // Replace with the correct path to your quote model
import { getQuotes } from '../db/quotes';
import { getUserById } from '../db/users';
import { getQuoteById } from '../db/quotes';
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

export const getQuotesById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Extract the quote ID from the URL parameter
    const quote = await getQuoteById(id); // Use the function from your database layer to retrieve the quote

    if (!quote) {
      return res.sendStatus(404); // Quote not found
    }

    return res.status(200).json(quote);
  } catch (error) {
    console.error('Error getting quote by ID:', error);
    return res.sendStatus(500); // Internal Server Error
  }
};

export const updateQuote = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params; // Extract the quote ID from the URL parameter
    const { text, author } = req.body; // Extract updated text and author from the request body

    // Retrieve the quote by ID
    const quote = await getQuoteById(id);

    if (!quote) {
      return res.sendStatus(404); // Quote not found
    }

    
    // Update the quote properties
    quote.text = text || quote.text; // Update text if provided, otherwise keep the existing value
    quote.author = author || quote.author; // Update author if provided, otherwise keep the existing value

    // Save the updated quote to the database
    await quote.save();

    return res.status(200).json(quote);
  } catch (error) {
    console.error('Error updating quote:', error);
    return res.sendStatus(500); // Internal Server Error
  }
};
