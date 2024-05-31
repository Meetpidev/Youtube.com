import express from "express";
import {login} from "../controller/login.js";
import { updateChanelData } from "../controller/Chanle.js";
import { getAllchanel } from "../controller/Chanle.js";
// import { gpoints, ppoints } from "../controller/Chanle.js";

const routes = express.Router();

routes.post("/login",login);
routes.patch("/update/:id",updateChanelData);
routes.get("/getAllchanel",getAllchanel);
// routes.get("/points",gpoints);
// routes.post("/points",ppoints);

export default routes