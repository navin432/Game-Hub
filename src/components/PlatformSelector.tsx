import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import usePlatform from "@/hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
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
  );
};

export default PlatformSelector;
