export const getPokemonsApi = (filter) => {
  const data = fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000");
  return data;
};
