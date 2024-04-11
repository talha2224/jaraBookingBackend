const {asyncErrorHandler }=require( "../middlewares/error/error");
const { RoomTypes, SubRooms } = require("../models/rooms.schema");



const createRoom = asyncErrorHandler(async(req,res)=>{
    let create = await RoomTypes.create(req.body)
    res.status(200).json(create)
})

const getRoom = asyncErrorHandler (async(req,res)=>{
    let getAll = await RoomTypes.find({})
    res.status(200).json(getAll)
})

const updateRoom = asyncErrorHandler(async(req,res)=>{
    let update = await RoomTypes.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json(update)
})

const createSubRoom = asyncErrorHandler(async(req,res)=>{
    let create = await SubRooms.create(req.body)
    res.status(200).json(create)
})

const getSubRoom = asyncErrorHandler (async(req,res)=>{
    let getAll = await SubRooms.find({roomId:req.params.id})
    res.status(200).json(getAll)
})

const updateSubRoom = asyncErrorHandler(async(req,res)=>{
    let update = await SubRooms.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json(update)
})

const deleteSubRoom = asyncErrorHandler(async(req,res)=>{
    let del = await SubRooms.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"SUB ROOM DELETED"})
})

const getAllSubRoom = asyncErrorHandler(async(req,res)=>{
    let allRooms = await SubRooms.find({}).populate("roomId")
    res.status(200).json(allRooms)
})


module.exports = {createRoom,getRoom,updateRoom,createSubRoom,getSubRoom,updateSubRoom,deleteSubRoom,getAllSubRoom}