import { Container, Heading } from "@chakra-ui/react";

const Performance = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.800" color="white">
      <Heading as="h1" size="2xl" mb={8}>
        Performance Tracking
      </Heading>
      {}
    </Container>
  );
};

export default Performance;
