import React from 'react';
import Svg from '../media/background.png';
import LazyLoad from 'react-lazyload';
import {
  Container,
  Stack,
  Flex,
  Center,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { Link as ReLink } from "react-router-dom";
import Chlid from '../media/LANDING PAGE IMAGE.png';
import basebg from '../media/basebg.png';
import box1 from '../media/box1.png';
import box2 from '../media/box2.png';
import box3 from '../media/box3.png';
import box4 from '../media/box4.png';
import box5 from '../media/box5.png';
import insidebox from '../media/Group 17.png';

export default function Uppermost() {
  // style={{clipPath:"ellipse(80% 50% at 50% 45%)"}} bgGradient="linear(to-b, #BCEBFF, #AED8FF, #FF95C2, #FFC4B1)
  return (
    <>

      <Image

        visibility={{ base: 'hidden', md: 'visible' }}
        position="absolute"
        zIndex="-2"
        w="100%"
        // top={{ base: '0px', md: '-60px' }}
        src={Svg}
      ></Image>


      <Image
        visibility={{ base: 'visible', md: 'hidden' }}
        position="absolute"
        h="600px"
        zIndex="-2"
        w="100%"
        // top={{ base: '0px', md: '-60px' }}
        src={basebg}
      ></Image>


      {/* <Image
    
        position="absolute"
        zIndex="-2"
    w="100%"
        top={{ base: '0px', md: '-60px' }}
        src={Svg}
      ></Image> */}
      <Container maxW="90%">
        <Stack
          w="100%"
          align={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack
            flex={1}
          // mt="-450px"
          // ml={{ base: '2px', md: '80px' }}
          >
            <Text
              mt="18px"
              color="white"
              fontSize={{ base: '35px', md: '70px' }}
              fontWeight="800"
              lineHeight={{ base: '40px', md: '70px' }}
              style={{ fontFamily: "'Nunito'" }}
            >
              Child's own Science <br /> Universe
            </Text>
            <Text
              py="10px"
              color="black"
              fontSize={{ base: '18px', md: '25px', lg: '30px' }}
              fontWeight="200"
              style={{ fontFamily: "'Nunito'" }}
            >
              Spark your child’s curiosity with topics kids love
            </Text>

            <Button
              as={Link}
              style={{textDecoration:"none"}}
              href="https://rzp.io/l/virtualspacetour"
              boxShadow="xl"
              mt="10px"
              height={{ base: "30px", md: "40px" }}
              width={{ base: "100px", md: "150px" }}
              fontSize={{ base: "18px", md: "25px" }}
              color="white"
              fontWeight="900"
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
          </Stack>
          <Flex
            flex={1}

            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box
         
              position={'relative'}
              // width={'full'}
              // border="2px red solid"
        
            >
             
                <Image
                  mt="50px"
                  src={Chlid}
                />
      
            </Box>
          </Flex>
        </Stack>

        <>

          <Box mt={{ base: "20px", md: "100px" }} as={Flex} justifyContent="center" alignItems="center"  >
            <Image  src={insidebox} ></Image>


            {/* <Box
              as={Flex}
              position="relative"
             
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              h="500px"
              bg="white"
              borderRadius={{ base: '15px', md: '53px' }}
              boxShadow="-1px -1px 84px -20px rgba(0,0,0,0.75)"
            ></Box>
           
            <Image visibility={{base:"hidden",md:"visible"}} h={{base:"0px",md:"180px"}} zIndex="-1" bottom='50px' left="-100px" src={box1} position="absolute" ></Image>
            <Image visibility={{base:"hidden",md:"visible"}}h={{base:"0px",md:"180px"}}   bottom='150px' left="-90px"  src={box4} position="absolute" ></Image>
            <Image visibility={{base:"hidden",md:"visible"}} h={{base:"0px",md:"150px"}} zIndex="-1" top='100px' right="-80px" src={box3} position="absolute" ></Image>
            <Image visibility={{base:"hidden",md:"visible"}} h={{base:"0px",md:"180px"}} zIndex="-1" top='220px' right="-100px" src={box2} position="absolute" ></Image>
            <Image visibility={{base:"hidden",md:"visible"}} h={{base:"0px",md:"180px"}} zIndex="-1" top='150px' right="-150px" src={box5} position="absolute" ></Image> */}
          </Box>
        </>
        <Box
          mt={{ base: "20px", md: "10px" }}
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          as={Flex}
        >
          <Text
            textAlign="center"
            fontSize={{ base: "20px", md: "35px" }}
            fontWeight="bold"
            style={{ fontFamily: "'Nunito'" }}
          >
            Go on New Science <br></br>Missions Daily
          </Text>

        </Box>
      </Container>
    </>
  );
}