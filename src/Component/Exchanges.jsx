import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  Heading,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Loading from "./Loading";


const Exchanges = () => {
  const [exchanges, setExchages] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchange = async () => {
      try {

        // using exchange api
        const { data } = await axios.get(`${server}/exchanges`);

        setExchages(data);

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchExchange();

    
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              ></ExchangeCard>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export const ExchangeCard = ({ name, img, url, rank }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={52}
      shadow={"lg"}
      p={8}
      borderRadius={"lg"}
      transition={"all 0.2s"}
      m={4}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />

      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;
