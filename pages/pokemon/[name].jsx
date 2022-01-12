import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { MY_POKEMON } from "src/constants";
import { GET_POKEMON } from "src/api/pokemon";
import PokemonDetail from "src/components/PokemonDetail/Pokemon";
import { PokemonWrapper } from "src/components/PokemonDetail/PokemonDetailStyled";

export default function Pokemon() {
  const { query } = useRouter();
  const name = query.name;

  const isCatched = Math.random() < 0.5;
 
  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name },
    fetchPolicy: "cache-first"
  });

  const savePokemon = (pokemon) => {
    const newPokemon = {...pokemon, ...{newName: 'Harcode Name'}};
    const savedPokemon = JSON.parse(window.localStorage.getItem(MY_POKEMON)) || [];
    savedPokemon.push(newPokemon);
    window.localStorage.setItem(MY_POKEMON, JSON.stringify(savedPokemon));
  }

  if (loading) <h1> Loading... </h1>;
  if (error) <h1> Error! </h1>;

  return (
    <PokemonWrapper>
      {/* <button
        style={{ marginTop: '100px' }}
        onClick={() => savePokemon(data.pokemon)}
      >
        Tambah
      </button> */}
      {data ? (
        <PokemonDetail
          pokemon={data.pokemon}
        /> 
      ) : (
        <p> Loading... </p>
      )}
    </PokemonWrapper>
  )
}