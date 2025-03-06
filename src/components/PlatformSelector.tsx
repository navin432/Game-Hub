import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "@/hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Box>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="surface">
            {selectedPlatform?.name || "All Platform"} <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem
            value={""}
            key={"none"}
            onClick={() => onSelectPlatform(null)}
          >
            All Platform
          </MenuItem>
          {data?.results.map((platform) => (
            <MenuItem
              value={platform.slug}
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
