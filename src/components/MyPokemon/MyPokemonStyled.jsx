import styled from "@emotion/styled";

export const MyPokemonWrapper = styled.div`
  min-height: 90vh;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  @media screen and (max-width: 460px) {
    margin: 20px auto 60px;
    width: 70%;
  }
`

export const EmptyPokemon = styled.h2`
  text-align: center;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`

export const ButtonCatchPokemon = styled.button`
  margin: 20px auto;
  border: none;
  border-radius: 8px;
  background: #f26257;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px;
  color: #fff;
  &:hover {
    background: #f77268;
  }
`

export const MyPokemonCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0px auto;
`

export const MyPokemonCard = styled.div`
  width: 100%;
  height: auto;
  color: #fff;
  background-color: ${(props) => props.color ? props.color : 'black' };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (min-width: 900px) {
    position: relative;
    top: 25px;
  }
  @media screen and (min-width: 450px) {
    flex: 25%;
    position: relative;
    top: 35px;
  }
  @media (min-width: 400px) and (max-width: 500px) {
    flex: 50%;
    position: relative;
    top: 35px;
  }
`

export const MyPokemonName = styled.h2`
  margin-top: 0px;
  margin-right: 5px;
  color: #fff;
  text-transform: capitalize;
  @media screen and (min-width: 450px) {
    font-size: 20px;
  }
  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 25px;
  }
`

export const PokemonBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
`

export const ReleaseButton = styled(ButtonCatchPokemon)`

`


