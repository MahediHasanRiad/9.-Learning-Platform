import { Router } from "express";
import { logInController } from "../controller/login.controller.js";
import { logOutController } from "../controller/logOut.controller.js";


const authRouter = Router();


authRouter.post("/login", logInController);
authRouter.get("/logout", logOutController);



export { authRouter };