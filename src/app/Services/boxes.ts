import axios from "axios";

export async function getAllBoxes() {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  };
  let url = `${process.env.NEXT_PUBLIC_API_URL}box/all`;

  return axios.get(url, axiosConfig).then((res) => {
    return res.data;
  });
}
