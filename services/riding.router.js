const {create,getAll, del,update} = require('./riding.serivice')

const router = require('express').Router()

router.post("/create",create)
router.put("/update/:id",update)
router.get("/get",getAll)
router.delete("/delete/:id",del)


module.exports = router