import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import { Genre } from './hooks/FetchGenres'
import GameGrid from './components/GameGrid'
function App() {
   const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
   return(
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      
      <Show above='lg'>
        <GridItem area='aside' paddingX='5px'>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
      
    </Grid>
   )
}

export default App
