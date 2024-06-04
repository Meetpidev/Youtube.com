import express from "express";
import { uploadvideo, getAllvideos } from "../controller/video.js";
import { likeController } from "../controller/like.js";
import { likeVideoController, AlllikeVideoController } from "../controller/likevideo.js";
import { watchLaterController, getAllwatchLaterController, deleteController } from "../controller/watchLater.js";
import { HistoryController, getAllHistoryController, clearHistoryController } from "../controller/history.js";
import upload from "../helpers/fileHelpers.js";

const routes = express.Router();

routes.post("/uploadvideo",upload.single("file"),uploadvideo);
routes.get("/getvideos",getAllvideos);

routes.patch("/like/:id", likeController );
routes.post("/likeVideo",likeVideoController);
routes.get("/AlllikeVideo",AlllikeVideoController);

routes.post("/watchLater",watchLaterController);
routes.get("/getAllwatchLater",getAllwatchLaterController);
routes.delete("/deleteWatchlater/:videoId/:Viewer",deleteController);

routes.post("/History",HistoryController);
routes.get("/getAllHistory",getAllHistoryController);
routes.delete("/clearHistory/:userId",clearHistoryController);

export default routes;