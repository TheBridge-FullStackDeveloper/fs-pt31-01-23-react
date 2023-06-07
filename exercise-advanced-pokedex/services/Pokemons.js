import instance from "./config";

export const getAllPokemons = () => {
  return instance.get("/all").then(res => res.data);
};