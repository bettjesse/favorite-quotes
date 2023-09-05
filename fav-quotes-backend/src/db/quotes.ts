import mongoose from 'mongoose';



const QuoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  createdAt: { type: Date, default: Date.now },
});

export const QuoteModel = mongoose.model('Quote', QuoteSchema);



// Quote Actions
export const createQuote = async (values: Record<string, any>) => {
    try {
      const quote = await new QuoteModel(values).save();
      return quote.toObject();
    } catch (error) {
      throw error; // You can handle the error here or let it propagate to the calling function
    }
  };
  


export const getQuotes = (filter: Record<string, any>) => QuoteModel.find(filter);

