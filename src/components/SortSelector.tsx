import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";

import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="surface">
          Order By: Relevance
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="rel">Relevance</MenuItem>
        <MenuItem value="rel">DateAdded</MenuItem>
        <MenuItem value="rel">Name</MenuItem>
        <MenuItem value="rel">Release</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
