import UserCustomList from "../models/UserCustomList.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const createList = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    throw new BadRequestError("Please provide a title for your list");
  }

  console.log("req.user");
  console.log(req.user);
  //req.body.createdBy = req.user._id;

  //   const list = await UserCustomList.create(req.body);
  //   res.status(StatusCodes.CREATED).json({ list });
};

const getAllLists = async (req, res) => {
  res.send("getAllLists");
};
const updateList = async (req, res) => {
  res.send("updateList");
};
const deleteList = async (req, res) => {
  res.send("deleteList");
};
const showListInfo = async (req, res) => {
  res.send("showListInfo");
};

export { createList, getAllLists, updateList, deleteList, showListInfo };
