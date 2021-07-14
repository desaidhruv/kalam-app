import {
  Box,
  Container,
  VStack,
  Text,
  Center,
  Image,
  Flex,
} from '@chakra-ui/react';
import icon1 from '../media/icon1.png';
import icon2 from '../media/icon2.png';
import icon3 from '../media/icon3.png';
export default function Faqs() {
  return (
    <Container mt="20px" maxW="90%">
      <VStack>
        <Box mt="80px">
          <Text
            textAlign="center"
            as={Center}
            fontSize={{ base: '20px', md: '45px' }}
          >
            We take every child's experience very seriously.
            <br /> Ask away!
          </Text>
          <VStack spacing="30px"  mb="100px">
            <Box 

              as={Flex}
              px="10px"
              flexDirection="row"
              h="50px"
              w="100%"
              alignItems="center"
              shadow="lg"
              borderRadius="30px"
            >
              <Image mr="20px" h="80%" src={icon1}></Image>
              <Text fontSize={{base:"15px",md:"25px"}}  fontWeight="500" >
                What is Kalam Labs?
              </Text>
            </Box>

            <Box
              as={Flex}
              px="10px"
              flexDirection="row"
              h="50px"
              w="100%"
              alignItems="center"
              shadow="lg"
              borderRadius="30px"
            >
              {' '}
              <Image mr="20px" h="80%" src={icon2}></Image>{' '}
              <Text fontSize={{base:"15px",md:"25px"}} fontWeight="500">Are these Live sessions interactive?</Text>{' '}
            </Box>

            <Box
              as={Flex}
              px="10px"
              flexDirection="row"
              h="50px"
              w="100%"
              alignItems="center"
              shadow="lg"
              borderRadius="30px"
            >
              {' '}
              <Image mr="20px" h="60%" src={icon3}></Image>
              <Text fontSize={{base:"15px",md:"25px"}}  fontWeight="500" >
                When? Where? and How can I attend these live sessions?
              </Text>{' '}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
