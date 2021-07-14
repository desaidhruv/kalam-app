import { Link as ReLink } from "react-router-dom";
import React from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import Chlid from '../media/live.png';
import Shadow from '../media/shadow.png';
import Live2 from '../media/live2.png';
import startsbg from '../media/startsbg.png';

export default function Section3() {
  // style={{clipPath:"ellipse(80% 50% at 50% 45%)"}} bgGradient="linear(to-b, #BCEBFF, #AED8FF, #FF95C2, #FFC4B1)
  return (
    <Box
      position="relative"
      h={{base:"69vh",md:"100vh"}}
      backgroundImage="linear-gradient(360deg, rgba(87,0,154,1) 0%, rgba(188,133,232,1) 46%, rgba(64,163,255,0.48) 70%, rgba(255,255,255,0) 100%)"
    >
      <Image bottom="10px" h="90%" position="absolute"  src={startsbg}></Image>
      {/* <Image position="absolute" zIndex="-5" w="100%" top={{ base: "0px", md: "100px" }} src={Svg}></Image> */}
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        // py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack
       
          flex={1}
          ml={{ base: '5px', md: '80px' }}
          w={{ base: '350px', md: '1000px' }}
          // spacing={{ md: 10 }}

        >
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            color="black"
            fontSize={{ base: '25px', md: '50px' }}
            fontWeight="800"
            style={{ fontFamily: "'Nunito'" }}
            visibility={{base:"hidden",md:"visible"}}
          >
            Child’s own solar system
          </Text>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            color="black"
            fontSize={{ base: '18px', md: '35px' }}
            fontWeight="400"
            style={{ fontFamily: "'Nunito'" }}
            visibility={{base:"hidden",md:"visible"}}
          >
            Explore and simulate every science topic

          </Text>
          <Box 
          as={Flex}
          justifyContent="center"
          alignItems="center"
          position="relative"
          h="50px"
          
          >

          <Button
           as={Link}
           href="https://rzp.io/l/virtualspacetour"
          left={{base:"",md:"0"}}
           position="absolute"
            textAlign="center"
            mt={{base:"-60px",md:"0px"}}
            boxShadow="xl"
            size="xl"
            style={{textDecoration:"none"}}
            height={{base:"30px",md:"40px"}}
            width={{base:"100px",md:"150px"}}
            fontSize={{base:"18px",md:"25px"}}
            color="white"
      
            borderRadius="60px"
            bg="#379FFF"
            _hover={{ bg: 'blue' }}
            _active={{
              bg: '#dddfe2',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }}
          >
            Join now
          </Button>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          ></Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box as={Center} position={'relative'} width={'full'}>
            <Image  mt={{base:"-35px",md:"0px"}}  ml="-20px" src={Live2} />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}