import Image from "next/image";
import { ImageWrapper, PokemonName, PokemonTypes, PokemonTypeWrapper }
  from "src/components/PokemonDetail/PokemonDetailStyled";
import { PokemonMoveWrapper, PokemonMoveTitle, PokemonMoveLists, PokemonListsWrapper, CatchPokemon }
  from "src/components/PokemonDetail/PokemonDetailStyled";

export default function PokemonDetail({ showModal = () => {}, pokemon }) {
  const { types, moves } = pokemon;
  const transformTypes = types.map(item => item.type).map(item => item.name);
  const transformMoves = moves.map(item => item.move).map(item => item.name);

  return (
    <>
      <CatchPokemon onClick={showModal}>
        Catch { pokemon.name }!
      </CatchPokemon>

      <ImageWrapper>
        <Image width="200" height="190" alt={pokemon.name} src={pokemon.sprites.front_default} />
      </ImageWrapper>
  
      <PokemonName> {pokemon.name} </PokemonName>

      <PokemonTypeWrapper>
        {transformTypes.map((item, index) => (
          <PokemonTypes key={index+1}> {item} </PokemonTypes>
        ))}
      </PokemonTypeWrapper>

      <PokemonMoveWrapper>
        <PokemonMoveTitle> Moves </PokemonMoveTitle>
        
        <PokemonListsWrapper>
          {transformMoves.map((move, index) => (
            <PokemonMoveLists key={index+1}> {move} </PokemonMoveLists>
          ))}
        </PokemonListsWrapper>

      </PokemonMoveWrapper>
    </>
  )
}