import React from "react";
import { Box,Stack,VStack,Text,Avatar } from "@chakra-ui/react";

const avatarSrc = "https://media.licdn.com/dms/image/D4D35AQHNYG80l_UXKg/profile-framedphoto-shrink_400_400/0/1681383884232?e=1682841600&v=beta&t=QxMMjBrEBKB30kA2YYEEvDHiB382Wzd4NNIu4fiDY2I";

const Footer = () => {
  return (
    <Box
      bgGradient='linear(to-r, blackAlpha.900, blackAlpha.800)'
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>

          <Text fontWeight={"bold"}>Contact Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Feel to Contact Us ! <br/>
            E-mail- XYZ@gmail.com <br/>
            Contact- 12546XXXXX
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Krishna Gupta</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
