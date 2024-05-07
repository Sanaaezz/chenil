"use client";
import { getAnimalById } from "@/app/Services/animals";
import { SingleAnimalProps } from "@/app/Utils/types";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  // utiliser le paramètre d'url ( id), pour appeler la fonction getAnimalById
  // et récupérer les infos de l'animal avec cet id
  // Puis afficher ces infos ici.

  const [animalData, setAnimalData] = useState<SingleAnimalProps>();

  useEffect(() => {
    getAnimalById(params.id).then((res) => {
      setAnimalData(res);
      console.log(res);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-white text-black">
      {animalData && (
        <div>
          <h1 className="my-8 text-center font-bold text-3xl ">
            {animalData.name}
          </h1>

          <img
            src={animalData.image}
            className="object-contain w-screen max-h-96 rounded-md "
          />
          <div className="flex  items-center md:flex-col md:w-1/4 md:items-start  md:justify-center w-2/3 mx-auto mt-4 justify-around ">
            <p className="my-1">
              <span className="bg-black p-1 text-white  mr-4">Arrival</span>{" "}
              {new Date(animalData.arrival).toLocaleDateString("FR")}
            </p>
            <p className="my-1">
              {/* // En base de données,  nous conservons les dates au format iso 8601 
                        pour des questions de qualité logicielle, et de standard pour tous les pays
                         du monde, afin qu'il n'y ait pas de problèmes de conversions de l'heure 
                         
                         Afin de ne pas afficher une heure illisible pour un humaine , c'est- a dire le format iso
                         // On peut convertir facilement une date sans utiliser de librairies
                          // Ici ma date de départ est convertie en heure locale , grâce à la fonction 
                          new Date(date de départ).toLocaleDateString() 
                          Cette fonction prend en paramètre un indicatif de pays et convertira la date dans le format
                          de ce pays., ici j'ai mis FR, j'aurais pu mettre un autre diminutif.
                         */}
              <span className="bg-black p-1 text-white  mr-4">Departure</span>
              {new Date(animalData.departure).toLocaleDateString("FR")}
            </p>
            <p className="my-1">
              <span className="bg-black p-1 text-white  mr-4">Category</span>
              {animalData.category.name}
            </p>
            <p className="my-1">
              <span className="bg-black p-1 text-white  mr-4">Box</span>
              {animalData.box.name}
            </p>
          </div>
          <div className="bg-black text-white my-4 p-4 w-1/3 mx-auto rounded-md">
            <h3>
              Owner:
              <br /> {animalData.user.name}
            </h3>
            <p>{animalData.user.email}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
