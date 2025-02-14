import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useColorMode } from "@/components/ui/color-mode";
function App() {
  const { setColorMode } = useColorMode();
  setColorMode("light");
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem hideBelow="lg" area="aside" bg="gold">
        SideBar
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
