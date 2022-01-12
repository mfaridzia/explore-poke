import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMONS } from "src/api/pokemons";
import { OFFSET, LIMIT, MY_POKEMON } from "src/constants";
import PokemonList from "src/components/PokemonList/PokemonList";
import { Button } from "src/components/PokemonList/PokemonListStyled";

export default function Home() {
  const router = useRouter();
  const [pokemonLists, setPokemonLists] = useState([]);
  const [myPokemon, setMyPokemon] = useState([]);

  const [getPokemons, { data, fetchMore, loading }] = useLazyQuery(GET_POKEMONS, {
    onCompleted: (data) => {
      const amountOwned = data.pokemons.results.map((item) => {
        return myPokemon.filter((pokemon) => pokemon.name === item.name).length || 0;
      });
      const transformPokemon = data.pokemons.results.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        url: pokemon.url,
        owned: amountOwned
      }));   
      setPokemonLists(transformPokemon);
    },
    variables: {
      limit: LIMIT,
      offset: OFFSET
    },
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    const myPokemonData = JSON.parse(window.localStorage.getItem(MY_POKEMON)) ?? [];
    setMyPokemon(myPokemonData);
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = () => {
    fetchMore({
      variables: {
        offset: data.pokemons.nextOffset,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const pokemons = {
          ...fetchMoreResult.pokemons,
          results: [
            ...previousResult.pokemons.results,
            ...fetchMoreResult.pokemons.results,
          ]
        };
        return { pokemons };
      },
    });
  }

  const redirectToDetail = (pokemon) => {
    router.push(`pokemon/${pokemon.name}`);
  }
  
  if (loading) return <h1 style={{ height: '100vh' }}> Loading... </h1>
  
  return (
    <>
      { pokemonLists.map((pokemon, index) => (
          <PokemonList
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            owned={pokemon.owned[index]}
            handleClick={() => redirectToDetail(pokemon)}
          />
        ))
      }

      <Button onClick={loadMore}> Load More </Button>
    </>
  )
}