import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CalendarPage from "../pages/CalendarPage";
import "../style/MainContent.css";

function MainContent() {
  return (
    <>
      <Box
        className="container"
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Routes>
          <Route path="/" element={<CalendarPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default MainContent;
