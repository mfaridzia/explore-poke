import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMONS } from "src/api/pokemons";
import { OFFSET, LIMIT } from "src/constants";
import PokemonList from "src/components/PokemonList/PokemonList";
import { Button } from "src/components/PokemonList/PokemonListStyled";

export default function Home() {
  const router = useRouter();
  const [pokemonLists, setPokemonLists] = useState([]);

  const [getPokemons, { data, fetchMore }] = useLazyQuery(GET_POKEMONS, {
    onCompleted: (data) => {
      setPokemonLists(data.pokemons.results);
    },
    variables: {
      limit: LIMIT,
      offset: OFFSET
    },
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
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
  
  return (
    <>
      { pokemonLists.map(pokemon => (
          <PokemonList
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            handleClick={() => redirectToDetail(pokemon)}
          />
        ))
      }

      <Button onClick={loadMore}> Load More </Button>
    </>
  )
}