const createList = async ( req, res ) => {
    res.send('createList')
}
const getAllLists = async ( req, res ) => {
    res.send('getAllLists')
}
const updateList = async ( req, res ) => {
    res.send('updateList')
}
const deleteList = async ( req, res ) => {
    res.send('deleteList')
}
const showListInfo = async ( req, res ) => {
    res.send('showListInfo')
}

export { createList, getAllLists, updateList, deleteList, showListInfo }

