import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:8080` });

API.interceptors.request.use(req => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const login = (authData) => API.post("/user/login",authData);

export const updateChanelData = (id,updateData) => API.patch(`/user/update/${id}`,updateData);

export const fetchAllchanel = () => API.get("/user/getAllchanel");

export const uploadVideo = (fileData,fileOption) => API.post("/video/uploadvideo",fileData,fileOption);

export const getVideos = () => API.get("/video/getvideos");

export const LikeVideo = (id,Like) => API.patch(`/video/like/${id}`,{Like});

export const addToLikedVideo = (likedVideoData) => API.post("/video/likeVideo", likedVideoData);

export const AlllikeVideo = () => API.get("/video/AlllikeVideo");

export const points = (id) => API.post(`/user/points/${id}`);