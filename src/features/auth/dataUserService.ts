import { UserDataApi } from "@/types/UserDataIp";

export const getUserDataByIp = async () => {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();
  return UserDataApi.fromJson(data);
};