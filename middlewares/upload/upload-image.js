const { mkdirp } = require("mkdirp");
const multer = require("multer");

const uploadImages = (type) => {
  const made = mkdirp.sync(`./public/images/${type}`);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`); //set up where to save the file
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname); // resest file name
    },
  });
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const extensionImageList = [".png", ".jpg"];
      const extension = file.originalname.slice(-4);
      const check = extensionImageList.includes(extension);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error("Invalid extension file"));
      }
    },
  });
  return upload.single(type);
};

module.exports = {
  uploadImages,
};
