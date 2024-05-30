import express from "express";
import { uploadvideo, getAllvideos } from "../controller/video.js";
import upload from "../helpers/fileHelpers.js";

const routes = express.Router();

routes.post("/uploadvideo",upload.single("file"),uploadvideo);
routes.get("/getvideos",getAllvideos);

export default routes;