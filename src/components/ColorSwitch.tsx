import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { HStack,  Switch, useColorMode } from "@chakra-ui/react"


export const ColorSwitch = () => {

    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <HStack>
           {/* <IconButton
                aria-label='Search database'
                onClick={toggleColorMode}
                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    />*/}
             <SunIcon /> 
            <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
             <MoonIcon />
        </HStack>
    )
}
