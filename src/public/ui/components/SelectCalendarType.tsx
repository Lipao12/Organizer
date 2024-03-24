import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
const SelectCalendarType = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      mb="20px"
      mt="10px"
    >
      <Select w={"150px"} mb={"30px"}>
        <option value="m">Calendário Ano</option>
        <option value="f">Calendário Mês</option>
      </Select>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SelectCalendarType;
