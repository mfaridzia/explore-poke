import { TextSuccess, TextFailed, InputPokemonName, ButtonSavePokemon, CloseIcon } from
  "src/components/PokemonDetail/PokemonDetailStyled";

export default function NotificationMessage({ inputName, handleInput, handleSave, isCatched, closeNotif }) {
  return (
    <>
      {isCatched === 'success' && (
        <>
          <TextSuccess> 
            Wow, you caught a pokemon! Give the Pokemon a name now.  
            <CloseIcon onClick={closeNotif}> &#10006; </CloseIcon>
          </TextSuccess>
          <InputPokemonName
            type="text"
            value={inputName}
            onChange={handleInput}
            placeholder="Enter pokemon name..."
          />
          <ButtonSavePokemon onClick={handleSave}> Save </ButtonSavePokemon>
        </>
      )}
      {isCatched === 'failed' && (
        <TextFailed>
          Wah, failed to catch the pokemon!
          <CloseIcon onClick={closeNotif}> &#10006; </CloseIcon>
        </TextFailed>
      )}
    </>
  )
}