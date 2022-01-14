import { GET_POKEMONS } from "src/api/pokemons";

export const mocksPokemons = [{
  request: {
    query: GET_POKEMONS,
    variables: {
      limit: 0,
      offset: 2
    },
  },
  result: {
    data: {
      pokemons: {
          count: 1118,
          nextOffset: 40,
          results: [
            {
              url: "https://pokeapi.co/api/v2/pokemon/21/",
              name: "spearow",
              id: 21,
              image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
            },
            {
              url: "https://pokeapi.co/api/v2/pokemon/22/",
              name: "fearow",
              id: 22,
              image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
            },
          
          ],
          status: true,
          message: ""
        }
      },
    },
  },
];