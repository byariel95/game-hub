import { IPlatform } from "../interfaces"
import { Icon, HStack } from "@chakra-ui/react"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs'
import { IconType } from "react-icons";


interface Props {
    platforms: IPlatform[]
}

export const PlatformIconList = ({ platforms }: Props) => {

    const iconMap: {[key:string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    return (
        <HStack >
            {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>)}
        </HStack>
    )
}
