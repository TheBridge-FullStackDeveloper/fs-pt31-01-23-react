import Styled from './styles';

const Pokemon = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [pokemon, setPokemon] = useState(null);
    const [name,params] = useRoute("/pokemons/:name");
  
    useEffect(() => {
     
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
        .then((response) => {
          setIsLoaded(true);
          setPokemon(response.data);
          console.log(response.data)
        })
        
    }, []);

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        
        return(
            <>
                <Styled.ContainerPoke>
                <h2>{pokemon?.name}</h2>
                <div>
                    <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
                </div>
                <p>Height: {pokemon?.height}</p>
                <p>Weight: {pokemon?.weight}</p>
                </Styled.ContainerPoke>   
            </>
        )

    }
}


export default Pokemon