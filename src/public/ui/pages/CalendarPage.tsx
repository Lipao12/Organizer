import { Box } from "@chakra-ui/react";
import { useState } from "react";
import CalendarMonth from "../components/CalendarMonth";
import CalendarYear from "../components/CalendarYear";
import SelectCalendarType from "../components/SelectCalendarType";
import "../style/MainContent.css";

function CalendarPage() {
  const [type, setType] = useState(1);
  const [month, setMonth] = useState(parseInt(new Date().getMonth()));
  return (
    <>
      <Box>
        <SelectCalendarType
          value={type}
          setChangeType={setType}
          setChangeMonth={setMonth}
          month={month}
        />
        {type === 1 ? (
          <CalendarYear year={2024} />
        ) : (
          <CalendarMonth year={2024} month={month} />
        )}
      </Box>
    </>
  );
}

export default CalendarPage;
