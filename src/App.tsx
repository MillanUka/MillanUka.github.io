import { Flex, Text, Button, Container, Heading, Link } from "@radix-ui/themes";

export default function App() {
  return (
    <Container>
      <Flex direction="column" gap="2">
      <Heading as="h1" size="8">
          Millan Uka
        </Heading>
        <Text>
          I'm a Fullstack Software Engineer based in Auckland, New Zealand.
        </Text>
        <Text>I work mainly with Go, Java, TypeScript, React and AWS.</Text>
        <Heading size="4">You can find me on these other sites: </Heading>
      <Link href="https://github.com/MillanUka">Github</Link>
      <Link href="https://www.linkedin.com/in/millanuka">Linkedin</Link>

      </Flex>
    </Container>
  );
}
