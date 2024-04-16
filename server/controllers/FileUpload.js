import { cloudinary } from "../Utils/fileUpload.js";
export const uploadImage = async (imagePath) => {

    
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    try{
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};