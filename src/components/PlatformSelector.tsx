import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { Platform } from "../hooks/FetchGamesResponse";
import FetchPlatforms from "../hooks/FectchPlatforms";
import { BsChevronBarDown } from "react-icons/bs";

interface Props{
    selectedPlatform : Platform | null;
    onSelectPlatform : (platform : Platform) => void;
}
const PlatformSelector = ({selectedPlatform, onSelectPlatform} : Props) => {
    const {platforms, error, isLoading} = FetchPlatforms();
    if (!Array.isArray(platforms)) {
        return <div>Error: Platforms data is not an array</div>;
    }
    if(isLoading) return null;
    if(error) return null;
    
    return (
        <Menu> 
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}> {selectedPlatform?.name || 'Platforms'} </MenuButton>
            <MenuList>
                {platforms.map((platform) => <MenuItem onClick = {() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
            
        </Menu> 
    )
}
export default PlatformSelector