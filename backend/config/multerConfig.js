const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinaryConfig");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "devine-energy-docs",
        allowed_formats: ["jpg", "png", "pdf", "docx"],
    },
});

const upload = multer({ storage });

module.exports = upload;
