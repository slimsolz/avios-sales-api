import multer from "multer";
import cloudinary from "cloudinary";
import cloudinaryStorage from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "avios-sales",
  allowedFormats: ["jpg", "png"],
  filename: (req, file, cb) => {
    cb(
      undefined,
      `${Date.now()}_${file.originalname.replace(/\.png|\.jpg/g, "")}`
    );
  },
});

export default multer({ storage });
