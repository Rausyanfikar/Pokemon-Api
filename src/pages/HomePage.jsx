import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import CardPokemon from '../components/CardPokemon';
import { data } from 'autoprefixer';

const HomePage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userSelect, setUserSelect] = useState('');
  const [show, setShow] = useState('false');

  // const navigate = useNavigate();
  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        console.log(results);
        const result = results.sort((a, b) => a.label?.localeCompare(b.label));
        setPokemon(result);
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
        <div className="pokemon-image flex justify-center  items-center w-full">
          <div className="flex justify-center  items-center flex-col">
            <div className="flex justify-center  items-center flex-col text-xl md:text-3xl text-white font-semibold text mb-5">TEMUKAN POKEMON FAVORITE KAMU</div>

            <div class="flex justify-center items-center flex-column">
              <div className="mb-3 xl:w-96">
                <div className="input-group relative flex  items-stretch w-full mb-4">
                  <input
                    type="search"
                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    options={pokemon}
                  />
                  <button
                    className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                    type="button"
                    id="button-addon2"
                  >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-4 lg:grid-cols-4 m-2 gap-3">
          {pokemon.map((item, index) => (
            <CardPokemon key={index} name={item.name} url={index + 1} />
          ))}
        </div>
      </Layout>
    );
  }
};

export default HomePage;
