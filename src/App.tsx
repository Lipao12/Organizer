import { Box } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./public/ui/components/Header";
import MainContent from "./public/ui/components/MainContent";

function App() {
  return (
    <>
      <Box>
        <BrowserRouter>
          <Header />
          <MainContent />
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
