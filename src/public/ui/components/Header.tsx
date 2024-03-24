import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box
        height={"65px"}
        background={"blue.500"}
        w={"100%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"0 15px"}
      >
        <Box>
          <Text>Página Inicial</Text>
        </Box>
        <Box
          borderRadius={"50%"}
          background={"#23D12A"}
          h={"50px"}
          w={"50px"}
        ></Box>
      </Box>
    </>
  );
};

export default Header;
