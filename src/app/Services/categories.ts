import axios from "axios";

export async function getAllCategories() {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  };
  let url = `${process.env.NEXT_PUBLIC_API_URL}category/all`;

  return axios.get(url, axiosConfig).then((res) => {
    return res.data;
  });
}
