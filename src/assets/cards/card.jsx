import React from "react";

const Card = ({ name, status, species, origin, image }) => {
  const alive =
    "bg-green-400 py-1 px-3 text-sm rounded-2xl shadow absolute top-0 right-0 m-2";
  const dead =
    "bg-red-400 py-1 px-3 text-sm rounded-2xl shadow absolute top-0 right-0 m-2";
  const unknown =
    "bg-gray-400 py-1 px-3 text-sm rounded-2xl shadow absolute top-0 right-0 m-2";

  return (
    <div
      className="font-signika  bg-white flex flex-col lg:max-w-[260px] rounded-2xl shadow-xl border-2"
    >
      <div className="relative ">
        <img src={image} alt={name} className="rounded-t-2xl shadow-md " />
        <div
          className={
            status === "Alive" ? alive : status === "Dead" ? dead : unknown
          }
        >
          {status}
        </div>
      </div>
      <div className="p-3 flex flex-col gap-2 lg:gap-4">
        <div className="text-2xl md:text-3xl font-semibold text-center md:py-2">{name}</div>
        <div>
          <div className="text-base md:text-xl text-zinc-800">Specie:</div>
          <div className="text-lg md:text-2xl font-medium">{species}</div>
        </div>
        <div>
          <div className="text-base md:text-xl text-zinc-800">Origin:</div>
          <div className="text-lg md:text-2xl font-medium">{origin}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
