const mongoose = require("mongoose")

const roomsSchema = mongoose.Schema({
    title:{type:String,required:true},
    price:{type:String,required:true},
    
}) 

const subRoomsSchema = mongoose.Schema({
    roomId:{type:mongoose.Schema.Types.ObjectId,ref:"RoomTypes"},
    title:{type:String,required:true},
    capacity:{type:Number,required:true},
    // availableRoom:{type:Number},
    booked:{type:Boolean,default:false}
})


const RoomTypes = mongoose.model("RoomTypes",roomsSchema,"RoomTypes")
const SubRooms = mongoose.model("SubRooms",subRoomsSchema,"SubRooms")

module.exports = {RoomTypes,SubRooms}