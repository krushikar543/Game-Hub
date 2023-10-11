
import { Heading } from "@chakra-ui/react"
import { Genre } from "../hooks/FetchGenres"
import { Platform } from "../hooks/FetchGamesResponse";

interface Props{
    genre : Genre | null;
    platform : Platform | null;
    searchText : string | null;
}
const HeadingText = ({genre, platform, searchText} : Props) => {
    let head = `${platform?.name || ''} ${genre?.name || ''} Games`;
    if(searchText){
        head = `Games Related to the Search ${searchText}`;
    }
    return(
        <Heading fontSize='5xl'>
            {head}
        </Heading>
    )
}

export default HeadingText 
