/** @format */

import axiosInstance from "@/util/AxiosInstans";

/** @format */

interface UploadFile {
  file: string;
  fileName: string;
  fileType: number;
}
const UploadFile = async ({ file, fileName, fileType }: UploadFile) => {
  try {
    const data = await axiosInstance.post("/manager/files/upload", {
      file: file,
      fileName: fileName,
      fileType: fileType,
    });
    return data.data;
  } catch (error) {
    throw new Error();
  }
};

export default UploadFile;
