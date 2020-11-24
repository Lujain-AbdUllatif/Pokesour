export function filterData(data, name) {
  return data.filter((pokemon) => pokemon.name.includes(name));
}
