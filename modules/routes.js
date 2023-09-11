const express = require("express");
const router = express.Router();
const multer = require("./middlewares/multer/index");
const CompersImage = require("./controllers/converter_image");
const crypto = require('crypto');
let uuid = crypto.randomUUID();


router.post("/converter",(req,res,next) => { req.userID = uuid; next()},
multer.UpladeImages.array("images"),
CompersImage.converter.bind(CompersImage));



module.exports = router;