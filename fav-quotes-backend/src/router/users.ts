import express from "express"
import { getAllUsers,getLoggedInUser } from "../controllers/users"
import { isAuthenticated } from "../middlewares"


export default(router: express.Router)=>{
    router.get("/users", getAllUsers)
    router.get("/user", isAuthenticated,getLoggedInUser)
}