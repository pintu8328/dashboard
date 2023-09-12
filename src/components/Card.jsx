import {
  Box,
  Text,
  Center,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Center py={70}>
      <Box
        maxW={"920px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Link as={RouterLink} to={`dashboard/details/${data._id}`}>
          <Text textDecoration="underline" color="blue.500" fontWeight="bold">
            {data.title}
          </Text>
        </Link>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          Topic: {data.topic}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {data.insight}
        </Text>
        <Text fontWeight={600} color={"gray.500"} mt={4}>
          Source: {data.source}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Intensity:{data.intensity}
        </Text>
        <Text fontWeight={600} color={"gray.500"} mt={4}>
          Likelihood: {data.likelihood}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Relevance:{data.relevance}
        </Text>
        {data.country && (
          <Text fontWeight={600} color={"gray.500"} mt={4}>
            Country: {data.country}
          </Text>
        )}

        {data.region && (
          <Text textAlign={"center"} color={"gray.900"} px={3}>
            Region:{data.region}
          </Text>
        )}

        {data.end_year && (
          <Text fontWeight={600} color={"gray.500"} mt={4}>
            Year: {data.end_year}
          </Text>
        )}
        {data.pestle && (
          <Text fontWeight={600} color={"gray.500"} mt={4}>
            PEST: {data.pestle}
          </Text>
        )}
        <Link as={RouterLink} to={`dashboard/details/${data._id}`}>
          <Text textDecoration="underline" color="blue.500" fontWeight="bold">
            Know More
          </Text>
        </Link>
      </Box>
    </Center>
  );
};

export default Card;
