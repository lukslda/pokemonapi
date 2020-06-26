import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const EXAMPLE_QUERY = gql`
{
  pokemons(first: 10) {
    id
    number
    name,
    image
  }
}`;

function App() {
  const { data, loading, error } = useQuery(EXAMPLE_QUERY);

  if (loading) return <p>Still loading..</p>;
  if (error) return <p>There is an error!</p>;
  return (
    <React.Fragment>
      <div className="container">
        <h1>Pokemon API</h1>
        {data && data.pokemons &&
          data.pokemons.map((pokemon, index) => (

            <div key={index}>

              <img src={pokemon.image} />
              <div>
                <h3>{pokemon.name}</h3>

              </div>
            </div>

          ))}
      </div>
    </React.Fragment>
  );
}

export default App;
