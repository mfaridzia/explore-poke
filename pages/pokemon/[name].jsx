import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { MY_POKEMON } from "src/constants";
import { GET_POKEMON } from "src/api/pokemon";
import PokemonDetail from "src/components/PokemonDetail/Pokemon";
import NotificationMessage from "src/components/PokemonDetail/NotificationMessage";
import { PokemonWrapper } from "src/components/PokemonDetail/PokemonDetailStyled";

export default function Pokemon() {
  const [isCatched, setIsCatched] = useState('default');
  const [pokemonName, setPokemonName] = useState('');
  const isCatchedValue = Math.random() < 0.5;
  const { query } = useRouter();
  const name = query.name;
 
  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name },
    fetchPolicy: "cache-first"
  });

  const savePokemon = (pokemon) => {
    const newPokemon = {...pokemon, ...{newName: pokemonName}};
    const savedPokemon = JSON.parse(window.localStorage.getItem(MY_POKEMON)) || [];
    savedPokemon.push(newPokemon);
    window.localStorage.setItem(MY_POKEMON, JSON.stringify(savedPokemon));
    setIsCatched('default');
  }

  const handleCatchPokemon = () => {
    if (isCatchedValue) {
      setIsCatched('success');
    } else {
      setIsCatched('failed');
    }
  }

  if (loading) <h1> Loading... </h1>;
  if (error) <h1> Error! </h1>;

  return (
    <PokemonWrapper>
      <NotificationMessage
        isCatched={isCatched}
        inputName={pokemonName}
        handleInput={(e) => setPokemonName(e.target.value)}
        handleSave={() => savePokemon(data.pokemon)}
        closeNotif={() => setIsCatched('default')}
      />
      {data ? (
        <PokemonDetail
          pokemon={data.pokemon}
          handleCatchPokemon={handleCatchPokemon}
        /> 
      ) : (
        <p> Loading... </p>
      )}
    </PokemonWrapper>
  )
}