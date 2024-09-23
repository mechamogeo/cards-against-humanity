import { Box, Center, Heading, Text } from '@chakra-ui/react';
import { WhiteLogo } from '../Card/Logos';

export function Maintance(): JSX.Element {
  return (
    <Center flexDir="column" minH="100vh" p="4" textAlign="center" gap="4">
      <Box w="200px">
        <WhiteLogo />
      </Box>

      <Box>
        <Heading as="h1" fontSize="2xl">
          Site em manutenção 🚧
        </Heading>

        <Text color="gray.600" fontSize="medium">
          Deseja auxiliar no projeto? Considere me pagar um café 😊
        </Text>
      </Box>
    </Center>
  );
}
