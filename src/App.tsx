
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { NavBar, GameGrid, GenreList, PlatformSelector, SortSelector } from './components'
import { useState } from 'react';
import { IGameQuery } from './interfaces/game-query';


function App() {


  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: `1fr`,
        lg: `200px 1fr`
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery,sortOrder})}/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>

  )
}

export default App
