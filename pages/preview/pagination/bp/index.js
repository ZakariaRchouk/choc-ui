import React from "react";
import { chakra, Container, Flex, useColorModeValue } from "@chakra-ui/react";

const PagButton = (props) => {
  const activeStyle = {
    bg: useColorModeValue("brand.600", "brand.500"),
    color: useColorModeValue("white", "gray.200"),
  };
  return (
    <chakra.a
      href="#"
      mx={1}
      px={4}
      py={2}
      borderRadius="md"
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && "not-allowed"}
      {...(props.active && activeStyle)}
    >
      {props.children}
    </chakra.a>
  );
};
const Ma = () => {
  return (
    <Container
      pos="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
      bg="gray.600"
      p={50}
      width="3xl"
      centerContent
    >
      <Flex>
        <PagButton disabled>previous</PagButton>
        <PagButton>1</PagButton>
        <PagButton active>2</PagButton>
        <PagButton>3</PagButton>
        <PagButton>4</PagButton>
        <PagButton>5</PagButton>
        <PagButton>Next</PagButton>
      </Flex>
    </Container>
  );
};

export default Ma;
