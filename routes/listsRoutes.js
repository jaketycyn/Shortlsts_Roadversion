import express from 'express'
const router = express.Router()

import { createList, getAllLists, updateList, deleteList, showListInfo } from "../controllers/listsController.js"

router.route('/').post(createList).get(getAllLists)
//remember about :id
router.route('/info').get(showListInfo)
router.route('/id').delete(deleteList).patch(updateList)




export default router