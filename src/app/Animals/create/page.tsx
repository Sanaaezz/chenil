"use client";
import { insertAnimal } from "@/app/Services/animals";
import { getAllBoxes } from "@/app/Services/boxes";
import { getAllCategories } from "@/app/Services/categories";
import { getAllUsers } from "@/app/Services/users";
import { BoxProps, CategoryProps, OwnerProps } from "@/app/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

const page = () => {
      const [boxesList, setBoxesList] = useState<BoxProps[]>([]);
      const [categoriesList, setCategoriesList] = useState<CategoryProps[]>([]);
      const [ownersList, setOwnersList] = useState<OwnerProps[]>([]);
      const [isLoading, setIsLoading] = useState(false);
  // const [boxesList, setBoxesList] = useState([]);
  // const [categoriesList, setCategoriesList] = useState([]);
  // const [ownersList, setOwnersList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [box, setBox] = useState("");
  const [category, setCategory] = useState("");
  const [owner, setOwner] = useState("");
  const [image, setImage] = useState("");

    useEffect(() => {
      setIsLoading(true);
      getAllBoxes().then((res) => {
        setBoxesList(res);
        setBox(res[0].id);
      });
      getAllCategories().then((res) => {
        setCategory(res[0].id);

        setCategoriesList(res);
      });
      getAllUsers().then((res) => {
        setOwnersList(res);
        setOwner(res[0].id);
        setIsLoading(false);
      });
    }, []);

  function handleSubmit() {
    if (
      !name ||
      !departure ||
      !arrival ||
      !box ||
      !category ||
      !owner ||
      !image
    ) {
      let animalData = {
        name: name,
        departure: departure,
        arrival: arrival,
        box: box,
        category: category,
        owner: owner,
        image: image,
      };

      alert("some fields are missing");
    } else {
      let animalData = {
        name: name,
        departure: departure,
        arrival: arrival,
        box: box,
        category: category,
        owner: owner,
        image: image,
      };
            insertAnimal(animalData).then((res) => {
                if (res.status === 201) {
                    toast.success('Animal registered')
                    push('/animals')
                }
              })
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-white">
      <img
        className="mx-auto  w-16 h-16 rounded-full"
        src="/logo.png"
        alt="Your Company"
      />
      <h2 className="text-orange-600 my-8 text-bold text-3xl">NEW FRIEND</h2>
      {isLoading ? (
        <RotatingLines />
      ) : (
        <div className="space-y-6  w-2/3 md:w-1/3">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="arrival"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Arrival
            </label>
            <div className="mt-2">
              <input
                type="date"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3 pr-2"
                onChange={(e) => setArrival(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="departure"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Departure
            </label>
            <div className="mt-2">
              <input
                type="date"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3 pr-2"
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Box
              </label>
            </div>
            <div className="mt-2">
              <select
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3 pr-2"
                onChange={(e) => setBox(e.target.value)}
                
              >
                {boxesList &&
                  boxesList.map((box: BoxProps) => {
                    return (
                      <option key={box.id} value={box.id}>
                        {box.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Category
              </label>
            </div>
            <div className="mt-2">
              <select
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3 pr-2"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoriesList &&
                  categoriesList.map((categories: CategoryProps) => {
                    return (
                      <option key={categories.id} value={categories.id}>
                        {categories.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Owner
              </label>
            </div>
            <div className="mt-2">
              <select
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3 pr-2"
                onChange={(e) => setOwner(e.target.value)}
              >
                {ownersList &&
                  ownersList.map((owner: OwnerProps) => {
                    return (
                      <option key={owner.id} value={owner.id}>
                        {owner.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Image
              </label>
            </div>
            <div className="mt-2">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              onClick={() => handleSubmit()}
              className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Register animal
              <span className="mx-2"></span>
            </button>
          </div>
        </div>
      )}
      ;
    </main>
  );
};

export default page;
function push(arg0: string) {
  throw new Error("Function not implemented.");
}

