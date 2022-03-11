import UserCustomList from "../models/UserCustomList.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const createList = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    throw new BadRequestError("Please provide a title for your list");
  }
  req.body.createdBy = req.user.userId;
  const userList = await UserCustomList.create(req.body);
  res.status(StautsCodes.CREATED).json({ userList });
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
