import { Button, HStack ,Text} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"}  shadow={"base"} bgColor={"blackAlpha.900"} flex={"row"}  gap={"10"}>
      <Button variant={"unstyled"} color={"white"} >
        <Link to="/"> Home</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"} >
        <Link to="/exchanges"> Exchanges</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>

      <Text variant={"unstyled"} color={"white"} textAlign={"center"}> Crypto-React-App--Krishna Gupta</Text>
    </HStack>

   
  );
};

export default Header;
