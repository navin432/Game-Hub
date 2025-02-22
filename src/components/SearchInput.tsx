import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />} width="100%">
      <Input placeholder="Search games..." variant="subtle" borderRadius={20} />
    </InputGroup>
  );
};

export default SearchInput;
