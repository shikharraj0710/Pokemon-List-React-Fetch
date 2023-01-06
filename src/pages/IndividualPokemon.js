import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppcontextProvider";

export default function IndividualPokemon() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPokemonData, singleData, setSelectedId, singleLoading, setSingleLoading } = useAppContext();

  useEffect(() => {
    setSingleLoading(true)
    setSelectedId(id);
    getPokemonData(id);
  }, []);

   
  return (
    singleLoading ? 
      <div className="my-12 text-3xl font-thin tracking-wider">
      Loading...
      </div>
    : 

    <div className="flex flex-col  items-center py-4 bg-gray-200  text-gray-700 max-w-[100vw] ">
      <div className="flex items-center my-16">
        <h1 className="text-6xl font-thin tracking-wider">
          '{singleData?.name}' Details
        </h1>
      </div>
      <div className="border-2 border-gray-600 bg-gray-50 px-4 py-4 rounded-lg mb-8 w-1/4">
        <img
          src={singleData?.images?.small}
          alt={singleData.name}
          className="w-[80%] h-auto mx-auto"
        />
        <div className="title-font font-thin text-lg my-3 text-center text-gray-900 flex items-center ">
          <p className="w-[50%] ">Name</p>
          <p className="font-mono font-medium w-[50%]">{singleData?.name ?? "-"}</p>
        </div>
        <div className="title-font text-center font-thin text-lg my-3 text-gray-900 flex justify-around items-center">
          <p className="w-[50%]">Level</p>
          <p className="font-mono font-medium w-[50%]">{singleData?.level ?? "-"}</p>
        </div>
        <div className="title-font text-center font-thin text-lg my-3 text-gray-900 flex justify-around items-center">
          <p className="w-[50%]">HP</p>
          <p className="font-mono font-medium w-[50%]">{singleData?.hp ?? "-"}</p>
        </div>
        <div className="title-font text-center font-thin text-lg my-3 text-gray-900 flex justify-around items-center">
          <p className="w-[50%]">Artist</p>
          <p className="font-mono font-medium w-[50%]">{singleData?.artist ?? "-"}</p>
        </div>
        <div className="title-font text-center font-thin text-lg my-3 text-gray-900 flex justify-around items-center">
          <p className="w-[50%]">Rarity</p>
          <p className="font-mono font-medium w-[50%]">{singleData?.rarity ?? "-"}</p>
        </div>
      </div>
      <button
        onClick={() => navigate("/")}
        className="text-white bg-gray-900 uppercase px-4 py-2 border-gray-900 border-2 transition-all duration-200 hover:bg-gray-50 hover:text-black focus:bg-gray-50 focus:text-black"
      >
        Home
      </button>
    </div>
  )
}
