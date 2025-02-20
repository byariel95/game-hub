import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { usePlatforms } from "../hooks"
import { IPlatform } from "../interfaces"


interface Props {
  onSelectedPlatform : (platform: IPlatform)=> void,
  selectedPlatform : IPlatform |null
}

export const PlatformSelector = ({onSelectedPlatform,selectedPlatform}: Props) => {

  const  {data,error} = usePlatforms()

  if (error) return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
          {selectedPlatform?.name || 'Platform'}
        </MenuButton>
        <MenuList>
          {data.map(platform => <MenuItem onClick={()=> onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}
