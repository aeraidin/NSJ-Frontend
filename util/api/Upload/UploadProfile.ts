/** @format */
import axiosInstance from "@/util/AxiosInstans";

interface UploadFile {
  imageFilePath: string;
  // Add any other properties you expect in the response
}
const UploadProfile = async ({ imageFilePath }: UploadFile) => {
  try {
    const data = await axiosInstance.post("/client/Update-profile-image", {
      filePath: imageFilePath,
    });
    return data.data;
  } catch (error) {
    throw new Error();
  }
};

export default UploadProfile;
