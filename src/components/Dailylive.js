import React from 'react';
import {
  Container,
  Stack,
  Flex,
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
} from '@chakra-ui/react';
import Chlid from '../media/live.png';
import Shadow from '../media/shadow.png';
import dailybg from '../media/dailybg.png';

export default function Dailylive() {
  // style={{clipPath:"ellipse(80% 50% at 50% 45%)"}} bgGradient="linear(to-b, #BCEBFF, #AED8FF, #FF95C2, #FFC4B1)
  return (
    <Box

      position="relative"
      mt="100px"
      h={{base:"55vh",md:"100vh"}}
      backgroundImage="linear-gradient(180deg, rgba(211,255,250,1) 0%, rgba(189,236,255,1) 44%, rgba(188,235,255,0) 100%)"
    >
      <Image  position="absolute"  src={dailybg}></Image>

      {/* <Image position="absolute" zIndex="-5" w="100%" top={{ base: "0px", md: "100px" }} src={Svg}></Image> */}
      <Stack

        align={'center'}
        spacing={{ base: 8, md: 10 }}
        // py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex
    
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          mb={{base:"70px",md:"0px"}}
        >
          <Box py="50px" position={'relative'} width={'full'}>
            <Image src={Chlid} />
         
          </Box>
        </Flex>
        <Stack
     
          flex={1}
          ml={{ base: '0px', md: '80px' }}
          w={{ base: '350px', md: '1000px' }}
          // spacing={{ md: 10 }}
        >
          <Text
       
            textAlign={{ base: 'center', md: 'left' }}
            color="black"
            fontSize={{ base: '25px', md: '50px' }}
            fontWeight="800"
            style={{ fontFamily: "'Nunito'" }}
            mt={{base:"-120px",md:""}}
            
          >
            Daily Live Sessions
          </Text>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            color="black"
          
            fontSize={{ base: '20px', md: '40px' }}
            fontWeight="400"
            style={{ fontFamily: "'Nunito'" }}
            // visibility={{base:"hidden",md:"visible"}}
          >
            Learn 30 New Science Facts Daily
          </Text>
          {/* <Button
                        mt="400px"

                        boxShadow="xl"
                        size="xl"
                        height={{base:"30px",md:"60px"}}
                        width={{base:"100px",md:"200px"}}
                        color="white"
                        fontSize={{base:"20px",md:"35px"}}
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

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          ></Stack>
        </Stack>
      </Stack>
    </Box>
  );
}