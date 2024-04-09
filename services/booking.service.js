const { asyncErrorHandler } = require("../middlewares/error/error");
const { bookingModel } = require("../models");



const createBooking = asyncErrorHandler(async(req,res)=>{
    let create = await bookingModel.create(req.body)
    if(create){
        res.status(200).json(create)
    }
})

module.exports ={createBooking}