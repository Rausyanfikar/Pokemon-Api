import React from 'react';

const CardDetail = ({ name, url, types, ability, move }) => {
  return (
    <div className="flex justify-center items-center w-full m-5">
      <div className="flex flex-col items-center md:flex-col md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${url}.svg`}
          alt={name}
          width={300}
          height={350}
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p className="text-gray-700 text-base">Type : {types}</p>
          <p className="text-gray-700 text-base">Ability : {ability}</p>
          <p className="text-gray-700 text-base mb-4">Moves :{move}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
