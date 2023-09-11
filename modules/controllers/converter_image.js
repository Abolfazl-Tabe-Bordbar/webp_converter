const webp = require('webp-converter');
var zipFolder = require('zip-folder');
const fs_node = require('file-system');
const fs = require("fs");
const mkdirp = require('mkdirp');




class ConverterImage {

    async converter(req,res){

        try {

            if (!req.FileError) {
                await mkdirp( `./../front/public/converter_images/${req.userID}_end`)


                req.files.forEach((file,index) => {

                    webp.cwebp(`./images/${req.userID}/${file.filename}`,`./images/${req.userID}/bynary_${index}.webp`,"-q 80");

                });


                // for (let index = 0; index < req.files.length; index++) {
                //   console.log(req.files[index].filename);
                //     fs.rename(`./images/${req.userID}/${req.files[index].filename}`,`./images/${req.userID}_end/bynary_${index}_end.webp`,(err) => {
                //         if (err) throw err;
                //     });
                // }


                // zipFolder(`./images/${req.userID}_end`, `./../front/public/converter_images/${req.userID}.zip`, function(err) {
                //     if(err) {
                //         console.log(err);
                //         res.json({
                //             status : false,
                //             file_path : ""
                //         });
                //     } else {
                //         fs_node.rmdirSync(`./images/${req.userID}`);
                //         fs_node.rmdirSync(`./../front/public/converter_images/${req.userID}_end`);

                //         res.json({
                //             status : true,
                //             file_path : `${req.userID}.zip`
                //         });
                //     }
                // });
            }else{
                res.json({
                    status : false,
                    file_path : "",
                    error_massage : req.FileError
                });
            }





        } catch (error) {
            console.log(error);
            res.json({
                status : false,
                file_path : ""
            });
        }

    }
}

module.exports = new ConverterImage();
