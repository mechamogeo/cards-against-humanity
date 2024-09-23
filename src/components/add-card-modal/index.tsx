import {
  Button,
  Flex,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';

import { RxCardStackPlus } from 'react-icons/rx';

interface AddCardModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

export function AddCardModal({ isOpen = false, onClose }: AddCardModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mx="4">
        <ModalHeader>
          <Flex align="center" gap="1">
            <Icon as={RxCardStackPlus} transform="auto" rotate="90" />

            <Heading as="h2" fontSize="xl">
              Adicionar carta
            </Heading>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody color="gray.800">
          <VStack w="full">
            <Text>
              Apenas admins podem adicionar cartas ao jogo...
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter flexDir="column" gap="2">
          <Button w="full" onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
