import React from "react";
import { chakra, Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";

const Ma = () => {
  return (
    <Box
      pos="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
      bg="gray.600"
      p={50}
      width="3xl"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        borderRadius="lg"
        boxShadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Mar 10, 2019
          </chakra.span>
          <chakra.a
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            borderRadius="md"
            _hover={{ bg: "gray.500" }}
          >
            Design
          </chakra.a>
        </Flex>

        <Box mt={2}>
          <chakra.a
            href="#"
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            Accessibility tools for designers and developers
          </chakra.a>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <chakra.a
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
          >
            Read more
          </chakra.a>

          <Flex alignItems="center">
            <Image
              mx={4}
              w={10}
              h={10}
              borderRadius="full"
              objectFit="cover"
              borderRadius="full"
              display={{ base: "none", sm: "block" }}
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            />
            <chakra.a
              color={useColorModeValue("gray.700", "gray.200")}
              fontWeight="700"
              cursor="pointer"
            >
              Khatab wedaa
            </chakra.a>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Ma;