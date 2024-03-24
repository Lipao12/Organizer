import {
  Box,
  Button,
  HStack,
  Input,
  Select,
  useNumberInput,
} from "@chakra-ui/react";
import { useState } from "react";
const SelectCalendarType = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [year, setYear] = useState(parseInt(new Date().getFullYear()));
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: year,
      onChange: (valueString) => setYear(parseInt(valueString)),
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const handleTypeChange = (value) => {
    props.setChangeType(value);
  };

  const handleMonthChange = (value) => {
    if (props.setChangeMonth) {
      props.setChangeMonth(value);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      mb="20px"
      mt="10px"
    >
      <Select
        w={"160px"}
        mb={"30px"}
        value={props.value}
        onChange={(e) => handleTypeChange(parseInt(e.target.value))}
      >
        <option value={1}>Calendário Ano</option>
        <option value={2}>Calendário Mês</option>
      </Select>
      {props.value === 1 ? (
        <Box>
          <HStack maxW="200px">
            <Button {...dec} style={{ transform: "rotate(-90deg)" }}>
              &#9650;
            </Button>
            <Input {...input} textAlign={"center"} />
            <Button {...inc} style={{ transform: "rotate(90deg)" }}>
              &#9650;
            </Button>
          </HStack>
        </Box>
      ) : (
        <Box>
          <Select
            w={"150px"}
            mb={"30px"}
            value={props.month}
            onChange={(e) => handleMonthChange(parseInt(e.target.value))}
          >
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </Select>
        </Box>
      )}
    </Box>
  );
};

export default SelectCalendarType;
