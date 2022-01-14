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
  @media screen and (max-width: 300px) {
    width: 50%;
  }
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
  @media screen and (max-width: 300px) {
    padding: 5px;
    font-size: 16px;
    min-width: auto;
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
  background: #ccc42f;
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
  @media screen and (max-width: 400px) {
    width: 50%;
  }
`

export const TextSuccess = styled.p`
  color: #000;
  text-align: center;
  font-size: 15px;
  text-align: center;
  padding: 6px;
  margin-top: 40px;
`

export const TextFailed = styled.p`
  color: red;
  text-align: center;
  font-size: 15px;
  text-align: center;
  padding: 6px;
  margin-top: 40px;
`

export const InputPokemonName = styled.input`
  width: 50%;
  border: none;
  border: 1px solid #dbd227;
  padding: 10px;
  border-radius: 8px;
  margin: 0 auto 20px;
  outline: none;
`

export const ButtonSavePokemon = styled.button`
  border: none;
  background: #dbd227;
  padding: 10px;
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #bfb82c;
  }
`

export const CloseIcon = styled.span`
  margin-left: 10px;
  color: #000;
  cursor: pointer;
`