import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import { Genre } from './hooks/FetchGenres'
import GameGrid from './components/GameGrid'
import { Platform } from './hooks/FetchGamesResponse'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'

function App() {
   const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
   const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
   const [sort, SetSort] = useState<string>('');
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
          <GenreList selectedGenre = {selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack padding={4} spacing={10}>
          <PlatformSelector selectedPlatform = {selectedPlatform} onSelectPlatform = {(platform) => setSelectedPlatform(platform)}/>
          <SortSelector sortName={sort} onSelectSortProp={(sortOrder) => SetSort(sortOrder)}/>
        </HStack>
        <GameGrid selectedsort = {sort} selectedPlatform = {selectedPlatform} selectedGenre={selectedGenre}/>
        
      </GridItem>
      
    </Grid>
   )
}

export default App
