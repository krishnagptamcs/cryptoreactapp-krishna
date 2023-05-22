import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import btCoin from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgGradient='linear(to-r, blackAlpha.900, blackAlpha.800)' w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btCoin}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        fontFamily={"Bebas Neue"} letterSpacing={"widest"}
        textAlign={"center"}
        fontWeight={"medium"}
        color={"whiteAlpha.700"}
        mt={"-10"}
      >
        Crypto-React-App
      </Text>
    </Box>
  );
};

export default Home;
