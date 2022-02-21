const multer = require("multer")
const path  =  require("path")
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const absPath = path.join(__dirname,"../uploads")
        console.log(absPath)
      cb(null,absPath);
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
    },
  });

  const multerFilter = (req, file, cb) => {

    const exts = file.mimetype.split("/")[1]

    if (exts === "jpeg"|| exts==="png") {
      cb(null, true);
    } else {
      cb(new Error("only images !!"), false);
    }
  };

module.exports = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
  });

