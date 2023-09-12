import React from "react";
import { Flex, Image, Box } from "@chakra-ui/react";

import "../App.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Box>
        <Flex justify="center" align="center" h="15vh">
          <Image
            src="https://blackcoffer.com/wp-content/uploads/2022/02/Blackcoffer-logo-new.png"
            alt="Blackcoffer Logo"
            boxSize="200px"
          />
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
