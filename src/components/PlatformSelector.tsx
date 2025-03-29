import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
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
          onClick={() => setSelectedPlatformId()}
        >
          All Platform
        </MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
            value={platform.slug}
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
