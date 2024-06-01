import express from "express";
import { uploadvideo, getAllvideos } from "../controller/video.js";
import { likeController } from "../controller/like.js";
import { likeVideoController, AlllikeVideoController } from "../controller/likevideo.js";
import upload from "../helpers/fileHelpers.js";

const routes = express.Router();

routes.post("/uploadvideo",upload.single("file"),uploadvideo);
routes.get("/getvideos",getAllvideos);
routes.patch("/like/:id", likeController );
routes.post("/likeVideo",likeVideoController);
routes.get("/AlllikeVideo",AlllikeVideoController);

export default routes;