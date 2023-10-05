import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronBarDown } from "react-icons/bs"

interface Props{
    sortName : string;
    onSelectSortProp : (sortprop : string) => void;
}


const SortSelector = ({sortName, onSelectSortProp} : Props) => {
    const sortBy = [
        {value : '', label : 'Relevance'},
        {value : '-added', label : 'Date Added'},
        {value : 'name', label : 'Name'},
        {value : '-released', label : 'Release date'},
        {value : '-metacritic', label : 'Popularity'},
        {value : '-rating', label : 'Average rating'}

    ]
    const getLabelByValue = (value : string) => {
        const sortByItem = sortBy.find((item) => item.value === value);
        return sortByItem ? sortByItem.label : 'Label not found';
    };
    return(
        <Menu> 
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}> sort By : {getLabelByValue(sortName) || 'Default'} </MenuButton>
            <MenuList>
                {sortBy.map(prop => <MenuItem onClick = {() => onSelectSortProp(prop.value)} key={prop.value} value={prop.value}> {prop.label} </MenuItem>)}
            </MenuList>
            
        </Menu> 
    )
}

export default SortSelector 
