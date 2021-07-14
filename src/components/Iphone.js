import { Link as ReLink } from "react-router-dom";
import {
    Flex,
    Container,
    Link,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Image,
    Box,
  } from '@chakra-ui/react';
  import Group1 from '../media/Group 13.png'
  import iphone1 from "../media/iphone1.png"
  import iphoneb from "../media/iphoneb.png"
  import iphonert from "../media/iphonert.png"
import gif from '../media/Portrait_2.gif';
  
  export default function Iphone() {
    return (
      <Box  mt="100px" >
        <Box  position="relative"  h={{base:"350px",md:"700px"}}  as={Flex}  justifyContent="center" alignItems="center">
            {/* <Image top="50px" h="120px" left="520px" zIndex="-1" position="absolute" src={iphone1}></Image>
            <Image border="2px red solid" h="150px" bottom="80px" right="550px" position="absolute"  src={iphoneb}></Image>
            <Image top="10px" right="480px"  position="absolute"  src={iphonert}></Image> */}
          <Image mr={{base:"0px",md:"-20px"}} h={{base:"100%",md:"80%"}}  src={Group1}></Image>
          <Image
                position="absolute"
                h={{base:"490px",md:"530px"}}
                w={{base:"237px",md:"260px"}}
                ml={{base:"-28px",md:"20px"}}
                // mt={{base:"10px",md:"20px"}}
                src={gif}
                borderRadius="20px"
              ></Image>
        </Box>
        <Box justifyContent="center" alignItems="center" as={Flex}>
          <Button
          mt={{base:"120px",md:"5px"}}
            mb={{base:"20px",md:"80px"}}
            boxShadow="lg"
            as={Link}
           style={{textDecoration:"none"}}
            href="https://rzp.io/l/virtualspacetour"
            height={{base:"30px",md:"40px"}}
            width={{base:"100px",md:"150px"}}
            fontSize={{base:"18px",md:"25px"}}
            color="white"

            background= "#379FFF"
            boxShadow= "0px 7px 13px #98BBD2"
            borderRadius= "50px"
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
      </Box>
    );
  }