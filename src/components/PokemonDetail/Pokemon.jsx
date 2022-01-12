import Image from "next/image";
import { ImageWrapper, PokemonName, PokemonTypes, PokemonTypeWrapper }
  from "src/components/PokemonDetail/PokemonDetailStyled";
import { PokemonMoveWrapper, PokemonMoveTitle, PokemonMoveLists, PokemonListsWrapper, CatchPokemon }
  from "src/components/PokemonDetail/PokemonDetailStyled";

export default function PokemonDetail({ pokemon }) {
  const { types, moves } = pokemon;
  const transformTypes = types.map(item => item.type).map(item => item.name);
  const transformMoves = moves.map(item => item.move).map(item => item.name);

  return (
    <>
      <ImageWrapper>
        <Image width="200" height="190" alt={pokemon.name} src={pokemon.sprites.front_default} />
      </ImageWrapper>
  
      <PokemonName> {pokemon.name} </PokemonName>

      <PokemonTypeWrapper>
        {transformTypes.map((item, index) => (
          <PokemonTypes key={index}> {item} </PokemonTypes>
        ))}
      </PokemonTypeWrapper>

      <CatchPokemon>
        Catch { pokemon.name }!
      </CatchPokemon>

      <PokemonMoveWrapper>
        <PokemonMoveTitle> Moves </PokemonMoveTitle>
        
        <PokemonListsWrapper>
          {transformMoves.map((move, index) => (
            <PokemonMoveLists key={index}> {move} </PokemonMoveLists>
          ))}
        </PokemonListsWrapper>

      </PokemonMoveWrapper>
    </>
  )
}