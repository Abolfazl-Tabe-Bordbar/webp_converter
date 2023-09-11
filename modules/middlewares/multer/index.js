const multer  = require('multer');
const mkdirp = require('mkdirp');


const ImageStorage = multer.diskStorage({

    destination : ( req , file , callback) => {


        let dir = `./images/${req.userID}`;
        // ----------------------------------------------

        mkdirp(dir).then(answer => callback( null , dir)).catch(error => callback( error , dir))

    },
    filename : ( req , file , callback ) => {
        callback( null , Date.now() +  file.originalname )
    }
});

const ImageFilter = (req, file, cb) => {

    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null , true);
    }else{
        req.FileError = "پسوند فایل شما نادرست است"
        cb(null , false);
    }

}

const UpladeImages = multer({
    storage : ImageStorage,
    fileFilter : ImageFilter,
});

module.exports =  {
    UpladeImages
}
