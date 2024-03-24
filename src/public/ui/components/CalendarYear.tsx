import { Box, Grid } from "@chakra-ui/react";
import { useState } from "react";
import calcTable from "../../../utils/calendar_config.js";

const CalendarYear = (props) => {
  const [calendario, setCalendario] = useState(calcTable(props.year));
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

  return (
    <Box
      className="calendar-container"
      w="100%"
      display="flex"
      justifyContent="center"
    >
      <Grid className="months" templateColumns="repeat(4, 1fr)" gap="1em">
        {months.map((month, x) => (
          <a href={`/calendar/tasks?date=${month}`}>
            <Box
              key={x}
              className="date"
              data-date={month}
              h="14vh"
              textAlign="center"
              p="0.5em"
              borderRadius="0.5em"
              border="1px solid #ccc"
              mb="10px"
              cursor="pointer"
            >
              <div>{month}</div>
            </Box>
          </a>
        ))}
      </Grid>
    </Box>
  );
};

export default CalendarYear;
