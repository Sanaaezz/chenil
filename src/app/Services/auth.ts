import axios from "axios";
import { authProps } from "../Utils/types";

//ligne de commande terminal
// npm i axios
// voir Notion

export async function register(authProps: authProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  return axios.post(
    url,
    {
      email: authProps.email,
      password: authProps.password,
      name: authProps.name,
    },
    axiosConfig
  );
}
export async function login(authProps: authProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  return axios.post(
    url,
    {
      email: authProps.email,
      password: authProps.password,
    },
    axiosConfig
  );
}
