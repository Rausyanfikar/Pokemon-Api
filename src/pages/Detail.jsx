import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import CardDetail from '../components/CardDetail';

const Detail = () => {
  const params = useParams();
  const [types, setTypes] = useState([]);
  const { detail_name } = params;
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBerries();
  }, []);

  const fetchBerries = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(`https://pokeapi.co/api/v2/pokemon/${detail_name}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const results = data;
        console.log(results);
        setPokemon(results);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    );
  } else {
    return (
      <Layout>
        <CardDetail key={pokemon.id} name={pokemon.name} url={pokemon.id} types={pokemon.types.map((tr) => tr.type.name)} ability={pokemon.abilities.map((tr) => tr.ability.name)} move={pokemon.moves.map((tr) => tr.move.name)} />
      </Layout>
    );
  }
};

export default Detail;
