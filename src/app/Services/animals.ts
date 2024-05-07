import axios from "axios";
import { AnimalProps } from "../Utils/types";

export async function getAllAnimals() {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  };
  let url = `${process.env.NEXT_PUBLIC_API_URL}animal/all`;
  return axios.get(url, axiosConfig).then((res) => {
    return res;
  });
}

export async function insertAnimal(animalProps: AnimalProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}animal/create`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  };
  return axios
    .post(
      url,
      {
        name: animalProps.name,
        arrival: new Date(animalProps.arrival).toISOString(),
        // arrival: "2024-04-28T20:00:27.862Z",
        departure: new Date(animalProps.departure).toISOString(),
        // departure: "2024-04-28T20:00:27.862Z",
        boxId: animalProps.box,
        ownerId: animalProps.owner,
        categoryId: animalProps.category,
        image: animalProps.image,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    });
}

export async function deleteAnimalById(id: string) {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  };
  let url = `${process.env.NEXT_PUBLIC_API_URL}animal/delete/${id}`;

  return axios.delete(url, axiosConfig).then((res) => {
    return res;
  });
}

export async function getAnimalById(id: string) {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  };
  let url = `${process.env.NEXT_PUBLIC_API_URL}animal/single/${id}`;

  return axios.get(url, axiosConfig).then((res) => {
    return res.data;
  });
}