import { HStack, Image } from "@chakra-ui/react"
import ColorModeSwitch from './ColorModeSwitch'
import logo from '../assets/logo.webp'
const NavBar = ()=> {
    return(
        <HStack justifyContent='space-between' padding='10px'>
            <Image src = {logo} boxSize='50px' />
            <ColorModeSwitch />
        </HStack>
    )
}
export default NavBar 
