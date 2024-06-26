const {asyncErrorHandler }=require( "../middlewares/error/error");
const { overnightBooking } = require("../models/overnight.booking.schema");
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


const getAllSubRoom2= asyncErrorHandler(async (req, res) => {
    let {visitDate,endDate} = req.body
    const booking = await overnightBooking.find({});
    let allRooms = await SubRooms.find({}).populate("roomId");
    let startingDate = new Date(visitDate);
    let endingDate = new Date(endDate);

    booking.forEach(bookingItem => {
        const visitDate2 = new Date(bookingItem.bookingDetails.visitDate);
        const endDate2 = new Date(bookingItem.bookingDetails.endDate);

        if (visitDate2 <= endingDate && endDate2 >= startingDate) {
            bookingItem.bookingDetails.selectedRooms.forEach(selectedRoom => {
                let quantity = selectedRoom.quantity
                const roomIndex = allRooms.findIndex(room => {
                    return room?._id?.toString() === selectedRoom?.id?.toString();
                });
                if (roomIndex !== -1) {
                    allRooms[roomIndex].availableRoom -= quantity;
                }
            });
        }
    });

    res.status(200).json(allRooms);
});



module.exports = {createRoom,getRoom,updateRoom,createSubRoom,getSubRoom,updateSubRoom,deleteSubRoom,getAllSubRoom,getAllSubRoom2}