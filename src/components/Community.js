import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  chakra,
  Center,
} from '@chakra-ui/react';
import img1 from '../media/community1.png';
import img2 from '../media/community2.png';
import img3 from '../media/community3.png';
import CountUp from 'react-countup';

export default function Community() {
  return (
    <Box backgroundColor="#21BFFC" mt={20}>
      <Heading
        as={Center}
        py="20px"

        color="white"
        fontSize={{ base: '20px', md: '45px' }}
      >
        Our Community is growing everyday
      </Heading>
      <Flex
        py="30px"
        justifyContent="center"
        alignItems="center"
        direction={{ base: 'column', md: 'row' }}
      >
        <Box
          as={Flex}
          flexDirection="column"
          alignItems="center"
          p={6}
          maxW={'330px'}
          w={'full'}
          pos={'relative'}
          zIndex={1}
        >
          <Box pos={'relative'}>
            <Image objectFit={'cover'} src={img1} />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading
              fontSize={'4xl'}
              fontFamily={'body'}
              fontWeight="600"
              color="white"
            >
              <CountUp end={789000} />+

            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                Facts
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Box
          as={Flex}
          flexDirection="column"
          alignItems="center"
          p={6}
          maxW={'330px'}
          w={'full'}
          pos={'relative'}
          zIndex={1}
        >
          <Box pos={'relative'}>
            <Image objectFit={'cover'} src={img2} />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading
              fontSize={'4xl'}
              fontFamily={'body'}
              fontWeight="600"
              color="white"
            >
              1,000,000+
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                Curious Questions
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Box
          as={Flex}
          flexDirection="column"
          alignItems="center"
          p={6}
          maxW={'330px'}
          w={'full'}
          pos={'relative'}
          zIndex={1}
        >
          <Box pos={'relative'}>
            <Image objectFit={'cover'} src={img3} />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading
              fontSize={'4xl'}
              fontFamily={'body'}
              fontWeight="600"
              color="white"
            >
              300,000+
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                kid-learners
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
