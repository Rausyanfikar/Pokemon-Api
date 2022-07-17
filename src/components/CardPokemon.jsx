import React from 'react';

const CardPokemon = ({ name, url }) => {
  return (
    <div className="container grow p-7   flex flex-col bg-white max-w-sm mx-auto rounded-md  text-black border-2 shadow-lg border-black ">
      <div className="cursor-pointer h-full flex flex-col justify-between ">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${url}.svg`} alt={name} width={300} height={350} />
        <div className="">
          <div className="text-center text-lg font-semibold  ">
            <p className="text-lg font-bold">{name}</p>
          </div>
        </div>
      </div>
      <button className="bg-yellow-400 justify-center items-center h-16 lg:h-10 hover:bg-yellow-500 rounded-md  flex flex-col lg:flex-row mt-2 ">
        <p className="text-lg font-semibold mr-2">Favorite</p>
      </button>
    </div>
  );
};

export default CardPokemon;
