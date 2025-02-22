import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "./ui/switch";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
