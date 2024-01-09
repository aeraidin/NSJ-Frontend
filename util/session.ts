import { cookies } from "next/headers";
export const useSestion = () => {
  const cookieStore = cookies();
  const isLoggedin = cookieStore.get("user");
  return isLoggedin?.value;
};
