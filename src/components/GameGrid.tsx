
import { SimpleGrid, Text } from "@chakra-ui/react"
import { useGames } from "../hooks"
import { GameCard } from "./GameCard"
import { GameCardSkeleton } from "./GameCardSkeleton"
import { GameCardContainer } from "./GameCardContainer"
import { IGameQuery } from "../interfaces"


interface Props {
    gameQuery:IGameQuery
}

export const GameGrid = ({gameQuery}: Props) => {

    const { data, error, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={3}>
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>))}
                {data.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>))}
            </SimpleGrid>
        </>

    )
}
