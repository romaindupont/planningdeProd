import React from 'react';
import { Link } from 'react-router-dom';

const BackToMenu = () => {
  return (
    <Link exact="true" to="/">
      <button type="button" className="button--back">Revenir au menu</button>
    </Link>
  );
};

export default BackToMenu;
