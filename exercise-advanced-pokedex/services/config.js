

import axios from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=1281&offset=0",
});

export default instance;