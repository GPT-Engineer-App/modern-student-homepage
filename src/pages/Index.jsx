import { Container, VStack, Button, Heading, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.800", "gray.900");
  const buttonColor = useColorModeValue("yellow.400", "yellow.300");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor} color="white">
      <VStack spacing={6}>
        <IconButton aria-label="Toggle theme" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} size="lg" alignSelf="flex-end" />
        <Heading as="h1" size="2xl" mb={8}>
          Student Home
        </Heading>
        <Button colorScheme="yellow" bg={buttonColor} size="lg" onClick={() => navigate("/homework")}>
          View Homework
        </Button>
        <Button colorScheme="yellow" bg={buttonColor} size="lg" onClick={() => navigate("/interactive-tools")}>
          Interactive Learning Tools
        </Button>
        <Button colorScheme="yellow" bg={buttonColor} size="lg" onClick={() => navigate("/performance")}>
          Performance Tracking
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
