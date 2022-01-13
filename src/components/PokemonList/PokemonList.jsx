import React from "react";
import Image from "next/image";
import { PokemonBox, ImageWrapper, PokemonName, TextOwned, TextWrapper } from "./PokemonListStyled";
import useBackgroundColor from "src/hooks/useBackgroundColor";

export default function PokemonList({ name, image, owned, showOwned = true, handleClick, children }) {
  const { backgroundColor } = useBackgroundColor(image);
  return (
    <PokemonBox color={backgroundColor}>
      <ImageWrapper onClick={handleClick}>
        <Image src={image} width="100" height="70" alt={name} />
      </ImageWrapper>
      <TextWrapper onClick={handleClick}>
        <PokemonName> {name} </PokemonName> 
        {showOwned && <TextOwned> (Owned: {owned ? owned : 0}) </TextOwned>}
      </TextWrapper>
      {children}
    </PokemonBox>
  )
}