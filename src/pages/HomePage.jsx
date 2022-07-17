import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import CardPokemon from '../components/CardPokemon';

const HomePage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  const fetchPokemon = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100/posts?_sort=views&_order=asc`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        console.log(results);
        setPokemon(results);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <Layout>
      <div className="pokemon-image flex justify-center  items-center w-full">
        <div className="flex justify-center  items-center flex-col text-xl md:text-3xl text-white font-semibold text">TEMUKAN POKEMON FAVORITE KAMU</div>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-4 lg:grid-cols-4 m-2 gap-3">
        {pokemon.map((item, index) => (
          <CardPokemon key={index} name={item.name} url={index + 1} />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
