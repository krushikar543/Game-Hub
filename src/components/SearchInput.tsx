import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props{
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch} : Props) => {
 const ref = useRef<HTMLInputElement>(null);
 return(
    <form style={{width : '100%'}} onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);
    }}>
        <InputGroup>
            <InputRightElement children={<BsSearch />}/>
            <Input ref = {ref} borderRadius={25} placeholder="SearchGames..... " variant = 'filled'/>
        </InputGroup>
    </form>
 )
}

export default SearchInput 
