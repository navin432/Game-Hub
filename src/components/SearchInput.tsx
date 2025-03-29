import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "@/store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />} width="100%">
        <Input
          ref={ref}
          placeholder="Search games..."
          variant="subtle"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
