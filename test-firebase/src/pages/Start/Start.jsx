import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div>
      <h1>Pagina de inicio donde inicia todo

        1 PESTANA
      </h1>
      <Link to="/slides">
        <button>Ir a Slides</button>
      </Link>
    </div>
  );
}

export default Start;