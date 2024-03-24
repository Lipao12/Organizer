import { Box } from "@chakra-ui/react";
import CalendarYear from "../components/CalendarYear";
import SelectCalendarType from "../components/SelectCalendarType";
import "../style/MainContent.css";

function CalendarPage() {
  return (
    <>
      <Box>
        <SelectCalendarType />
        <CalendarYear year={2024} />
      </Box>
    </>
  );
}

export default CalendarPage;
