import { Box, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import calcTable from "../../../utils/calendar_config.js";

const CalendarMonth = (props) => {
  const [calendario, setCalendario] = useState(calcTable(props.year));

  const currentMonthData = calendario[props.month] || [];

  return (
    <Box className="calendar-container" w="100%">
      <Grid className="day-of-week" templateColumns="repeat(7, 1fr)" gap="1em">
        <Text textAlign="center" height="14vh">
          Sun
        </Text>
        <Text textAlign="center" height="14vh">
          Mon
        </Text>
        <Text textAlign="center" height="14vh">
          Tue
        </Text>
        <Text textAlign="center" height="14vh">
          Wed
        </Text>
        <Text textAlign="center" height="14vh">
          Thu
        </Text>
        <Text textAlign="center" height="14vh">
          Fri
        </Text>
        <Text textAlign="center" height="14vh">
          Sat
        </Text>
      </Grid>
      <Box>
        {currentMonthData.map((week, x) => (
          <Grid
            key={x}
            className="days"
            templateColumns="repeat(7, 1fr)"
            gap="1em"
          >
            {week.map((day, y) => {
              const selectedDate = `${props.year}-${(props.month + 1)
                .toString()
                .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

              // Verifica se o dia não está vazio antes de renderizar o link
              if (day !== "") {
                return (
                  <a key={day} href={`/calendar/tasks?date=${selectedDate}`}>
                    <Box
                      className="date"
                      data-date={day}
                      h="14vh"
                      textAlign="center"
                      p="0.5em"
                      borderRadius="0.5em"
                      border="1px solid #ccc"
                      mb="10px"
                      cursor="pointer"
                    >
                      <div>{day}</div>
                    </Box>
                  </a>
                );
              } else {
                // Renderiza apenas a caixa se o dia estiver vazio
                return (
                  <Box
                    key={day}
                    className="date"
                    data-date={day}
                    h="14vh"
                    textAlign="center"
                    p="0.5em"
                    borderRadius="0.5em"
                    border="1px solid #ccc"
                    mb="10px"
                  >
                    <div>{day}</div>
                  </Box>
                );
              }
            })}
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default CalendarMonth;
