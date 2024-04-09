const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    type:{type:String,required:true},
    adults:{type:Number,default:0},
    children:{type:Number,default:0},
    toodlers:{type:Number,default:0},
    infant:{type:Number,default:0},

    adultsAlcoholic:{type:Number,default:0},
    adultsNonAlcoholic:{type:Number,default:0},
    Nanny:{type:Number,default:0},
    childTotal:{type:Number,default:0},

    stayingFrom:{type:Date,required:true},
    stayingTo:{type:Date,required:true},
    extras:{type:Array,default:null},
    stayingRoom:{type:Array,required:true},
    totalAmount:{type:Number,required:true},
    paymentStatus:{type:String,default:"Not Active"},
    identity:{type:String,required:true},

    firstname:{},
    lastname:{},
    email:{},
    phoneNumber:{},
    gender:{},
    additionalRequirement:{},


})

const Booking =  mongoose.model('Booking',bookingSchema,'Booking')
module.exports = Booking