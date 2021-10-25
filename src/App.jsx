import react, {useEffect,useState} from "react";
import axios from "axios";
import ButtonAppBar from "./components/ButtonAppBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PokemonCard2 from "./components/PokemonCard2";
import Pagination from '@mui/material/Pagination';




function App() {
  const [pokemons, setPokemons]= useState([])
  const [page, setPage]=useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    
  };

  useEffect(()=>{
    axios.get(`https://pokedex20201.herokuapp.com/pokemons?page=${page}`)
    .then((response)=> {
      setPokemons(response.data.data)
      console.log(page)
    })
  },[])
  
  

  return (
    <div>
      <ButtonAppBar />
      <Container>
        <Box>
          <Grid container spacing={5}>
          {pokemons.map((pokemon) => (
          <Grid item xs={6} lg={6}>
            <div key={pokemon.id}>
              <PokemonCard2 image={pokemon.image_url} name= {pokemon.name} kind={pokemon.kind} id={pokemon.id} height={pokemon.height} weight={pokemon.weight}/>
            </div>
            </Grid>
              ))}
          </Grid>
        </Box> 
      <Pagination page={page} onChange={handleChange} size= "large"count={33} variant="outlined" color="primary" boundaryCount={2}/>
      
      </Container>
    </div>
  );
}


export default App;
