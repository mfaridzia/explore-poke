import styled from "@emotion/styled";

export const PokemonWrapper = styled.div`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const ImageWrapper = styled.div`
  width: auto;
  background: #ddd;
  border-radius: 50%;
  margin: 50px auto 0px auto;
`

export const PokemonName = styled.h2`
  text-transform: capitalize;
  font-size: 35px;
  text-align: center;
`

export const PokemonTypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const PokemonTypes = styled.h3`
  background: #ddd;
  text-align: center;
  padding: 15px;
  min-width: 100px;
  margin: 0px 10px;
  border-radius: 5px;
  font-size: 20px;
  @media screen and (min-width: 600px) {
    padding: 10px;
    font-size: 16px;
  }
`

export const PokemonMoveWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PokemonMoveTitle = styled.h2`
  font-size: 21px;
  text-align: center;
  margin-top: 30px;
`

export const PokemonMoveLists = styled.div`
  color: #000;
  width: 50%;
  padding: 5px;
  border: 1px solid #ddd;
  margin: 5px 0px;
  text-align: center;
`

export const PokemonListsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  background: #fff;
  margin: 0 auto 30px;
`

export const CatchPokemon = styled.button`
  width: 30%;
  background: #e3d924;
  color: #fff;
  margin: 80px auto 0px auto;
  text-transform: capitalize;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #dbd227;
  }
`