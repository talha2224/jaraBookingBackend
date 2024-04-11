const { createRoom, getRoom, updateRoom, createSubRoom, getSubRoom, updateSubRoom, deleteSubRoom, getAllSubRoom } = require('../services/mainRooms.service')

const router = require('express').Router()




router.post("/create",createRoom)
router.get("/get",getRoom)
router.put("/update/:id",updateRoom)

router.post("/sub/create",createSubRoom)
router.get("/sub/get/all",getAllSubRoom)
router.get("/sub/get/:id",getSubRoom)
router.put("/sub/update/:id",updateSubRoom)
router.delete("/sub/delete/:id",deleteSubRoom)

module.exports = router