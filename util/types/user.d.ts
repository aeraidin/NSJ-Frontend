/** @format */

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: 0 | 1;
}

interface myCommentData {
  id: number;
  replay: string;
  isApproved: boolean;
  rate: number;
  createDate: string;
  user: { id: number; name: string; profileImage: string };
  text: string;
}
