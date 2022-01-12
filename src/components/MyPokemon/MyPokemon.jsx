import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MY_POKEMON } from "src/constants";
import { EmptyPokemon, ButtonCatchPokemon, MyPokemonCardWrapper } from "src/components/MyPokemon/MyPokemonStyled";
import PokemonList from "src/components/PokemonList/PokemonList";

export default function MyPokemon() {
  const [myPokemon, setMyPokemon] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const myPokemonData = JSON.parse(window.localStorage.getItem(MY_POKEMON));
    setMyPokemon(myPokemonData);
  }, []);

  const redirectToDetail = (pokemon) => {
    router.push(`pokemon/${pokemon.name}`);
  }

  return (
    <>
      {myPokemon.length ? (
        <MyPokemonCardWrapper>
          {myPokemon.map(pokemon => (
            <PokemonList
              key={pokemon.id+`${Math.random()}`}
              name={pokemon.newName}
              image={pokemon.sprites.front_default}
              showOwned={false}
              handleClick={() => redirectToDetail(pokemon)}
            />
          ))}
        </MyPokemonCardWrapper>
      ) : (
        <EmptyPokemon>
          You haven`t caught a pokemon yet!
          <ButtonCatchPokemon onClick={() => router.push('/')}>
            catch it now!
          </ButtonCatchPokemon>
        </EmptyPokemon>
      )}
    </>
  )
}