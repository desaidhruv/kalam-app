import React from 'react';
import Svg from '../../media/background.png';
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
import { Link as ReLink } from 'react-router-dom';
import people from '../../media/people.png';
import bgtimeline from '../../media/bgtimeline.png';

import insidebox from '../../media/Group 17.png';
import Timeline2 from './Timeline2'
import GridTimeline from './GridTimeline'

export default function Timeline() {
  // style={{clipPath:"ellipse(80% 50% at 50% 45%)"}} bgGradient="linear(to-b, #BCEBFF, #AED8FF, #FF95C2, #FFC4B1)
  return (
    <>
    
    <Box
    h="900px"
    backgroundSize={{base:"none",md:"cover"}}
backgroundRepeat="no-repeat"
    backgroundImage={bgtimeline}
    >
      {/* <Box
        h="900px"
        bg="gray.400"
        position="absolute"
        zIndex="-2"
        w="100%"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={people}
        // top={{ base: '0px', md: '-60px' }}
      ></Box> */}

      {/* <Image
    
        position="absolute"
        zIndex="-2"
    w="100%"
        top={{ base: '0px', md: '-60px' }}
        src={people}
      ></Image> */}
      <Box
      h="100%"
 
        
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundImage={people}
  
      >
        <Container maxW="95%">
          <Stack w="100%" direction={{ base: 'column', md: 'row' }}>
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
                paddingTop="80px"
              >
                The Speakers who inspired thousands
              </Text>
              <Text
              color="white"
                py="10px"
                fontSize={{ base: '18px', md: '30px', lg: '35px' }}
                fontWeight="200"
                style={{ fontFamily: "'Nunito'" }}
              >
                Interactive sessions with great leaders
              </Text>

              {/* <Button
              as={Link}
              isExternal
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
            </Button> */}
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
              ></Box>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </Box>
    <Timeline2 />
    <GridTimeline/>
    </>
  );
}
