import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"
import { useState } from "react";


const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
    const [text, settext] = useState('Light Mode');
    const changetext = () => {
        toggleColorMode();
        if(text === 'Light Mode') settext('Dark Mode');
        else settext('Light Mode');
    }
    return(
        <HStack >
            <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={changetext}/>
            <Text> {text} </Text>
        </HStack>
    )
}
export default ColorModeSwitch;
