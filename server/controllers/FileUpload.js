import { cloudinary } from "../Utils/fileUpload.js";
export const upload=async(file)=>{
    try {
        const result = await cloudinary.uploader.upload(filePath, { folder: 'uploads' });
        return result.secure_url;
      } catch (error) {
        console.error('Error uploading file to Cloudinary:', error);
        throw error;
      }

}