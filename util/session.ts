import { cookies } from "next/headers";

export const useSestion = () => {
 const cookieStore = cookies();
 const isLoggedin = cookieStore.get("token");
 console.log(Boolean(isLoggedin?.value));

 return Boolean(isLoggedin?.value);
};
