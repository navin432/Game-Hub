import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem hideBelow="lg" area="aside" paddingX={5}>
        <GenreList
          selectedGenreId={gameQuery.genreId}
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
        />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={6} marginBottom={6}>
          <GameHeading gameQuery={gameQuery} />
          <HStack gap={5}>
            {" "}
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform?.id })
              }
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
