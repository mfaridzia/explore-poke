import styled from "@emotion/styled";

const ModalWrapper = styled.div`
  max-width: 100%;
  background: rgba(0, 0, 0, 0.61);
  height: auto;
  margin: 100px auto;
  z-index: 0;
`

const ModalBoxSuccess = styled.div`
  width: 50%;
  height: 200px;
  margin: 0 auto;
`

const ModalBoxFailed = styled.div`
  width: 50%;
  height: 200px;
  margin: 0 auto;
`

export default function ModalPokemon({ savePokemon, isCatched, children, closeComponent }) {
  return (
    <ModalWrapper>
      {closeComponent}
      {isCatched && (
        <ModalBoxSuccess>
          <h1> Wow, you caught a pokemon! </h1>
          <p> Give the Pokemon a name now! </p>
          {children}
          <button onClick={savePokemon}> Save </button>
        </ModalBoxSuccess>
      )}
    </ModalWrapper>
  )
}