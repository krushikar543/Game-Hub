import FetchGenres from "../hooks/FetchGenres"
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
const GenreList = () => {
    const {genres, error, isLoading} = FetchGenres();
    return(
        <List>
            {genres.map((genre) => (   
                <HStack>
                    <Image boxSize='32px' paddingY={1} borderRadius = {8} src = {genre.image_background}/>
                    <Text key={genre.id}>{genre.name}</Text>
                </HStack>
                
            ))}
        </List>
    )
}
export default GenreList 
