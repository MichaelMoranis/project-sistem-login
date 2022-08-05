import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import {Flex, VStack, Heading, Spacer} from "@chakra-ui/layout";
import {FaSun, FaMoon} from "react-icons/fa";


function Theme() {
    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <VStack>
            <Flex w="100%">
                <Heading ml="2" size="md" fontWeight="bold"
                color="blue.500">Colortheme</Heading>
                <Spacer></Spacer>    
                <IconButton ml={9} icon={isDark ? <FaSun/> : <FaMoon />} 
       isRound="true" onClick={toggleColorMode}></IconButton>     
            </Flex>
        </VStack>
    )



}

export default Theme;


