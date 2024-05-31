import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import { ColorSwitch } from "./ColorSwitch";

export const NavBar = () => (
    <HStack justifyContent='space-between' alignItems='center' padding='10px'>
        <Image
            src={logo}
            boxSize='50px'
        />
        <ColorSwitch/>
    </HStack>
)
