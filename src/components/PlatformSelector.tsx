import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Box marginX={8} transform="translateY(20px)">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="surface" size="sm">
            Platform <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data.map((platform) => (
            <MenuItem value={platform.slug} key={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
