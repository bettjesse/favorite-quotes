import  express from "express"

import { createNewQuote,myQuotes } from "../controllers/quotes"
import { isAuthenticated } from "../middlewares"

export default( router: express.Router)=> {
    router.post("/quote", isAuthenticated,createNewQuote)
    router.get("/myquote", isAuthenticated,myQuotes)
}