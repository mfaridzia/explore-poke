import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { initializeApollo } from "src/lib/apolloClient";
import { GET_POKEMONS } from "src/api/pokemons";
import { OFFSET, LIMIT, MY_POKEMON } from "src/constants";
import PokemonList from "src/components/PokemonList/PokemonList";
import { Button } from "src/components/PokemonList/PokemonListStyled";
import { Loading, LoadingWrapper } from "src/components/Loading/Loading";

export default function Home() {
  const router = useRouter();
  const [pokemonLists, setPokemonLists] = useState([]);
  const [myPokemon, setMyPokemon] = useState([]);

  const [getPokemons, { data, fetchMore, loading, error }] = useLazyQuery(GET_POKEMONS, {
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
  
  if (loading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    )
  }

  if (error) return <h1> ERROR~ </h1>;

  return (
    <>
      <Head>
        <title>Explore Pokemon</title>
        <meta
          name="description"
          content="Here you can explore various types of Pokemon that exist around the world."
          key="description"
        />
      </Head>

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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_POKEMONS,
    variables: {
      limit: LIMIT,
      offset: OFFSET
    }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}