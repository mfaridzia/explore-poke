import Head from "next/head";
import { MyPokemonWrapper } from "src/components/MyPokemon/MyPokemonStyled";
import MyPokemon from "src/components/MyPokemon/MyPokemon";

export default function Home() {
  return (
    <MyPokemonWrapper>
      <Head>
        <title>My Pokemon</title>
        <meta
          name="description"
          content="A collection of pokemon lists that I have caught."
          key="description"
        />
      </Head>
      <MyPokemon />
    </MyPokemonWrapper>
  )
}