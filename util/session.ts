"use server";
import { cookies } from "next/headers";

export const useSestion = () => {
 const cookieStore = cookies();
 const isLoggedin = cookieStore.get("token");
 return Boolean(isLoggedin?.value);
};
