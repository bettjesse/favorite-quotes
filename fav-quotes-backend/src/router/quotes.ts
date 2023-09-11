import  express from "express"

import { createNewQuote,myQuotes ,getQuotesById, updateQuote} from "../controllers/quotes"
import { isAuthenticated } from "../middlewares"

export default( router: express.Router)=> {
    router.post("/quote", isAuthenticated,createNewQuote)
    router.get("/myquote", isAuthenticated,myQuotes)
    router.get('/quotes/:id', isAuthenticated,getQuotesById)
    router.put("/quotes/:id", isAuthenticated, updateQuote);
    
}
