import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="surface">
          Order by: {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem
            value={order.value}
            key={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {" "}
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
