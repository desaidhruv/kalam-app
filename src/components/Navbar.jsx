import {
  Button,
  Text,
  Flex,
  Spacer,
  Image,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Icon,
  Link,
  DrawerCloseButton,
} from '@chakra-ui/react';
import logo from '../media/logo.png';
import { MdMenu } from 'react-icons/md';
import { Link as ReLink } from 'react-router-dom';

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as={Flex}
      h="60px"
      bg="white"
      position="relative"
      alignItems={'center'}
    >
      <Box>
        <Icon
          ml="10px"
          cursor="pointer"
          w={10}
          h={10}
          color="#7AD6FF"
          onClick={onOpen}
          visibility={{ base: 'visible', md: 'hidden' }}
          as={MdMenu}
        />
      </Box>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Button 
              w="100%" 
              as={ReLink}
              to="/youtube"
            >
              Youtube
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* <Spacer/> */}
      <>
        <Box as={ReLink} to='/' ml={{ base: '0px', md: '-50px' }} w="80px">
          <Image src={logo}></Image>
        </Box>
        <Text
          fontWeight="500"
          style={{ fontFamily: "'Nunito'" }}
          fontSize={{ base: '12px', md: '18px' }}
        >
          {' '}
          Kalam Labs ( Elixar Systems Pvt Ltd )
        </Text>
      </>

      <Button
        as={ReLink}
        to="/join"
        position="absolute"
        right={{ base: '20px' }}
        visibility={{ base: 'visible', md: 'hidden' }}
        size="sm"
        height="30px"
        width="100px"
        fontWeight="700"
        color="#379FFF"
        fontSize="18px"
        borderRadius="60px"
        border="2px solid #379FFF"
        _hover={{ bg: 'blue' }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9',
        }}
      >
        <Text style={{ textDecoration: 'none' }}>
          Join now
        </Text>
      </Button>

      <Spacer />
      <>
        <Button
          as={Link}
          href="https://rzp.io/l/virtualspacetour"
          style={{ textDecoration: "none" }}
          visibility={{ base: 'hidden', md: 'visible' }}
          colorScheme="light"
          variant="ghost"
          mr={{ base: '1px', md: '3' }}
          fontSize={{ base: '15', md: '20' }}
        >
          <Text style={{ textDecoration: 'none' }} to="/signup">
            Join now
          </Text>
        </Button>
        <Button
          as={ReLink}
          to="/youtube"
          visibility={{ base: 'hidden', md: 'visible' }}
          colorScheme="light"
          variant="ghost"
          mr={{ base: '1px', md: '6' }}
          fontSize={{ base: '15', md: '20' }}
        >
          <Text style={{ textDecoration: 'none' }}>
            Youtube
          </Text>
        </Button>
      </>
    </Box>
  );
}
