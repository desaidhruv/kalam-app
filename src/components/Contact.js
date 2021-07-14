import {
  Image,
  Box,
  Flex,
  Container,
  VStack,
  Stack,
  Input,
  Center,
  Heading,
  Button,
} from '@chakra-ui/react';
import contact from '../media/contact.svg';
import Contact1 from '../media/contact1.png';
import Contact2 from '../media/contact2.png';

export default function Contact() {
  return (
    <>
      <Image Image position="absolute" zIndex="-1" w={'100%'} src={contact}></Image>
      <Box

        as={Flex}

        justifyContent="center"
        alignItems="center"
        h={{ base: "75vh", md: '100vh' }}>

        <Box

          w={{ base: '90%', md: '100%' }}
          h={{ base: "500px", md: "550px" }}
          // as={Flex}
          maxW={{ base: '80%', md: '450px' }}
          mx="auto"

          position="relative"
        // justifyContent="center"
        // alignItems="center"
        >
          <Image
            position="absolute"
            visibility=""
            h={{ base: "80px", md: "200px" }}
            top={{ base: "-40px", md: "-80px" }}
            right={{ base: "-10px", md: "-140px" }}
            src={Contact1}
          >

          </Image>
          <Image
            position="absolute"
            visibility=""
            h={{ base: "250px", md: "400px" }}
            bottom={{ base: "10px", md: "-100px" }}
            left={{ base: "-80px", md: "-150px" }}
            zIndex="-1"
            src={Contact2}
          >

          </Image>


          <Box

            as={Flex}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            h={{ base: '400px', md: '500px' }}
            bg="white"
            borderRadius="53px"
            boxShadow="-1px -1px 84px -20px rgba(0,0,0,0.75)"
          >
            <Heading
              fontSize={{ base: '30px', md: '50px' }}
              style={{ fontFamily: "'Nunito'" }}
              mb="10px"
            >
              CONTACT US
            </Heading>
            <VStack spacing={{ base: "15px", md: "20px" }} w="80%" mt="10px">
              <Input
                isRequired
                variant="flushed"
                placeholder="Name*"
              />
              <Input

                variant="flushed"
                placeholder="Email*"
              />
              <Input

                variant="flushed"
                placeholder="Phone*"
              />
              <Input

                variant="flushed"
                placeholder="Message*"
              />
              <Button

                boxShadow="lg"
                size="xl"
                height="40px"
                width="150px"
                color="white"
                fontSize="25px"
                borderRadius="60px"
                bg="#379FFF"
                _hover={{ bg: 'blue' }}
                _active={{
                  bg: '#dddfe2',
                  transform: 'scale(0.98)',
                  borderColor: '#bec3c9',
                }}
              >
                Send
              </Button>
            </VStack>
          </Box>
        </Box>
      </Box>
    </>

  );
}
