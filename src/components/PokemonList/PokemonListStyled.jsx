import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 600px) {
    max-width: 60%;
  }
  @media (min-width: 400px) and (max-width: 500px) {
    max-width: 100%;
  }
`

export const PokemonBox = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.color ? props.color : 'black' };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 5px 10px;
  border-radius: 5px;
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

export const Button = styled.button`
  width: 100%;
  max-width: 100%;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
  margin: 35px 10px 10px;
  padding: 8px 0px;
  border-radius: 5px;
  &:hover {
   background: #000;
  }
  @media screen and (min-width: 450px) {
    margin: 45px 10px 20px;
  }
  @media (min-width: 400px) and (max-width: 500px) {
    margin: 45px 10px 20px;
  }
`

export const ImageWrapper = styled.div`
  margin-top: 20px;
  cursor: pointer;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 410px) {
    flex-direction: column;
  }
`

export const TextOwned = styled.p`
  color: #fff;
  margin-top: 0px;
  @media screen and (max-width: 460px) {
    margin-top: 0px;
  }
`

export const PokemonName = styled.h2`
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