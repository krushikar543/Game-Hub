import FetchGenres from "../hooks/FetchGenres"
import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import { Genre } from '../hooks/FetchGenres';
interface Props{
    onSelectGenre: (genre: Genre) => void;
}


const GenreList = ({onSelectGenre} : Props) => {
    const {genres, error, isLoading} = FetchGenres();
    if(isLoading) return <Spinner />;
    if(error) return null;
    return(
        <List>
            {genres.map((genre) => (  
            <ListItem key={genre.id}>
                <HStack >
                    <Image boxSize='32px' paddingY={1} borderRadius = {8} src = {genre.image_background}/>
                    <Button onClick = {() => onSelectGenre(genre)} variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>
                
            ))}
        </List>
    )
}
export default GenreList 
