import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"
const SearchInput = () => {
 return(
    <InputGroup>
        <InputRightElement children={<BsSearch />}/>
        <Input borderRadius={25} placeholder="SearchGames..... " variant = 'filled'/>
    </InputGroup>
 )
}

export default SearchInput 
