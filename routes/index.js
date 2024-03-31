const allRoutes = require("express").Router()
const accountRoute= require('./account.router')
const guestRoute = require('./guest.router')
const daypassRoute = require('./daypass.router')
const staffRoute = require('./staff.router')
const voucherRoute = require('./voucher.router')
const discountRoute = require('./discount.route')
const DaypassdiscountRoute = require('./daypassDiscount.route')
const DaypassVoucherRoute = require('./daypassVoucher.route')



allRoutes.use("/admin",accountRoute)
allRoutes.use("/guest",guestRoute)
allRoutes.use("/daypass",daypassRoute)
allRoutes.use("/staff",staffRoute)
allRoutes.use("/voucher",voucherRoute)
allRoutes.use("/discount",discountRoute)
allRoutes.use("/daypass/discount",DaypassdiscountRoute)
allRoutes.use("/daypass/voucher",DaypassVoucherRoute)






module.exports = {allRoutes}