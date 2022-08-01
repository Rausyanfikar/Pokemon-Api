import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="w-full bg-yellow-400 h-20 flex justify-center items-center font-semibold text-xl">
      <div>
        <Link to="/">POKEMON</Link>
      </div>
    </nav>
  );
};
