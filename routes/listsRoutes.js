import express from "express";
const listsRouter = express.Router();

import {
  createList,
  getAllLists,
  updateList,
  deleteList,
  showListInfo,
} from "../controllers/listsController.js";

listsRouter.route("/").post(createList).get(getAllLists);
//remember about :id
listsRouter.route("/info").get(showListInfo);
listsRouter.route("/id").delete(deleteList).patch(updateList);

export default listsRouter;
