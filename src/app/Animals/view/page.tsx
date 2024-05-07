"use client";
import React, { useEffect, useState } from "react";

import { FaDog, FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { deleteAnimalById, getAllAnimals } from "@/app/Services/animals";
import { useRouter } from "next/navigation";

const Animals = () => {
  const [animalsList, setAnimalsList] = useState([]);
  //pour recharger la page apres le delete
    const [isReloadNeeded, setIsReloadNeeded] = useState(false);

    const { push } = useRouter();

    useEffect(() => {
      getAllAnimals().then((res: any) => {
        setAnimalsList(res.data);
        setIsReloadNeeded(false);
      });
    }, [isReloadNeeded]);

    function deleteAnimal(id: string) {
      deleteAnimalById(id).then((res: any) => {
        if (res.status === 204) {
          toast.success("animal supprimé");
          setIsReloadNeeded(true);
        }
      });
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-black">
      <h1 className="my-4 text-2xl font-bold">
        L'équipe baveuse
      </h1>
      <div className="flex items-center flex-wrap w-5/6 my-4">
        {animalsList &&
          animalsList.map((animal: any) => {
            return (
              <div
                key={animal.id}
                className="m-6 w-80  h-96     rounded-md bg-blue-950 text-white"
              >
                <img
                  src={animal.image}
                  className=" w-full  h-48 object-cover rounded-t-md"
                  onClick={() => {
                    push(`/Animals/view/${animal.id}`);
                  }}
                />
                <h3 className="text-center py-1">{animal.name}</h3>
                <p className="text-center py-1">Box numéro {animal.box.name}</p>
                <p className="text-center py-1">{animal.category.name}</p>
                <p className="text-center py-1">{animal.user.name}</p>
                <div className="w-4/6 mx-auto flex items-center justify-between ">
                  <span onClick={() => deleteAnimal(animal.id)}>
                    <FaDog />
                    <FaTrashAlt color="#fca311" size={16} />
                  </span>
                  <span>edit</span>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default Animals;
