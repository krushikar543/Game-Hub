import { HStack, Icon } from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa"
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Platform } from "../hooks/FetchGamesResponse"
import { IconType } from "react-icons";

interface Props{
    platform : Platform[];
}
const PlatformIconList = ({platform} : Props) => {
    const MapTexttoIcon: {[key: string]: IconType} = {
        pc : FaWindows, 
        playstation: FaPlaystation,
        xbox: FaXbox, 
        mac : FaApple,
        linux : FaLinux,
        android : FaAndroid,
        ios : MdPhoneIphone,
        nintendo : SiNintendo,
        web : BsGlobe
    }
    return(
        <HStack marginY='5px'>
        {platform.map((pf) => (
            <Icon key={pf.id} as={MapTexttoIcon[pf.slug]} color='grey.400'/>
        ))}
        </HStack>
    )
}

export default PlatformIconList 