import FetchGenres from "../hooks/FetchGenres"
import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import { Genre } from '../hooks/FetchGenres';
interface Props{
    selectedGenre : Genre | null;
    onSelectGenre: (genre: Genre) => void;
}


const GenreList = ({selectedGenre, onSelectGenre} : Props) => {
    const {genres, error, isLoading} = FetchGenres();
    if(isLoading) return <Spinner />;
    if(error) return null;
    return(
        <List>
            {genres.map((genre) => (  
            <ListItem key={genre.id}>
                <HStack >
                    <Image boxSize='32px' paddingY={1} borderRadius = {8} src = {genre.image_background}/>
                    <Button fontWeight = {genre.id === selectedGenre?.id ? 'bold' : 'normal' } onClick = {() => onSelectGenre(genre)} variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>
                
            ))}
        </List>
    )
}
export default GenreList 
