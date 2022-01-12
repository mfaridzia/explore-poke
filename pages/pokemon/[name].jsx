import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "src/api/pokemon";
import PokemonDetail from "src/components/PokemonDetail/Pokemon";
import { PokemonWrapper }
  from "src/components/PokemonDetail/PokemonDetailStyled";

export default function Pokemon() {
  const router = useRouter();
  const { name } = router.query;

  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name },
    fetchPolicy: "cache-first"
  });

  if (loading) {
    return <h1> Loading... </h1>
  }

  if (error) {
    return <h1> Error! </h1>
  }

  const { pokemon } = data;

  return (
    <PokemonWrapper>
      <PokemonDetail
        pokemon={pokemon}
      />
    </PokemonWrapper>
  )
}