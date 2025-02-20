import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { IGame } from "../interfaces"
import { PlatformIconList } from "./PlatformIconList"
import { CriticScore } from "./CriticScore"
import { getCroppedImageUrl } from "../utils"


interface Props {
  game: IGame
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize='2xl' >
          {game.name}
        </Heading>
        <HStack marginY={1} justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}
