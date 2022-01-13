import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MY_POKEMON } from "src/constants";
import { EmptyPokemon, ButtonCatchPokemon, MyPokemonCardWrapper, ReleaseButton }
  from "src/components/MyPokemon/MyPokemonStyled";
import PokemonList from "src/components/PokemonList/PokemonList";

export default function MyPokemon() {
  const [myPokemon, setMyPokemon] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const myPokemonData = JSON.parse(window.localStorage.getItem(MY_POKEMON));
    const checkPokemon = myPokemonData ?? [];
    const transformPokemonData = checkPokemon.map((pokemon) => {
      const checkImage = pokemon.sprites ? pokemon.sprites.front_default : pokemon.image;
      return {
        id: pokemon.id,
        name: pokemon.name,
        newName: pokemon.newName,
        image: checkImage
      }
    });
    setMyPokemon(transformPokemonData);
  }, []);

  const redirectToDetail = (pokemon) => {
    router.push(`pokemon/${pokemon.name}`);
  }

  const releasePokemon = (id) => {
    const confirmRelease = window.confirm('Are you sure you want to release Pokemon?');
    if (confirmRelease) {
      const release = myPokemon.filter(pokemon => pokemon.id !== id);
      setMyPokemon(release);
      window.localStorage.setItem(MY_POKEMON, JSON.stringify(release));
    } else {
      return;
    }
  }

  return (
    <>
      {myPokemon.length ? (
        <MyPokemonCardWrapper>
          {myPokemon.map(pokemon => (
            <PokemonList
              key={pokemon.id+`${Math.random()}`}
              name={pokemon.newName}
              image={pokemon.image}
              showOwned={false}
              handleClick={() => redirectToDetail(pokemon)}
            >
              <ReleaseButton onClick={() => releasePokemon(pokemon.id)}>
                Release
              </ReleaseButton>
            </PokemonList>
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