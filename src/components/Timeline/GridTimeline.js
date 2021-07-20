import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Container,
  Stack,
  HStack,
  Flex,
  Link,
  Image
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import Aswal from '../../media/Dr DK Aswal.PNG'
import Sid from '../../media/Sid.PNG'
import Jarred from '../../media/Jarred.PNG'
import space from '../../media/space2.jpg'

export const TimelineCard = ({ thedata }) => {
  const template = thedata.map(data => {
    console.log(data.image)
    console.log(data.id)
    return (
      <Box
        borderTopRadius="40px"
        shadow="0px 28px 60px rgb(0,0,0,15%)"
        bg="white"
        h={{ base: '390px', md: '490px' }}
        w={{ base: '320px', md: '420px' }}
      >
        <Box borderTopRadius="40px" bg="rgb(225,72,149,25%)" h="60%">
          <Image src={data.image} />
        </Box>
        <Box pl="25px" h="40%">
          <Stack spacing={{ base: '15px', md: '18px' }}>
            <Text
              fontFamily="Nunito"
              fontSize={{ base: '15px', md: '18px' }}
              pt="8px"
            >
              {data.date}
            </Text>
            <Text>
              <Heading fontSize={{ base: '20px', md: '30px' }}>
                {data.name}
              </Heading>
              <Text
                key={data.id}
                fontFamily="Nunito"
                fontSize={{ base: '10px', md: '15px' }}
              >
                {data.designation}
              </Text>
            </Text>
            <HStack color="gray.500" pb="5px">
              <Text
                cursor="pointer"
                fontFamily="Nunito"
                fontSize={{ base: '10px', md: '15px' }}
                as={Link}
                href={data.link}
              >
                Learn more
              </Text>
              <MdArrowForward
                cursor="pointer"
                fontSize={{ base: '15px', md: '18px' }}
              />
            </HStack>
          </Stack>
        </Box>
      </Box>
    );
  });
  return template;
};

export default function GridTimeline() {
  const topdate = {
    january2021: 'January 2021',
    january2020: 'January 2020',
  };
  const [info, setinfo] = useState([
    {
      id: 1,
      date: 'January 2021',
      name: 'Dr DK Aswal',
      designation: 'Director CSIR-CEERI and NPL',
      link: 'https://www.youtube.com/watch?v=4VY86376Ff4',
      image: Aswal
    },
    {
      id: 2,
      date: 'January 2021',
      name: 'Dr Matthew Green House',
      designation: 'Project Scientist at Goddard Flight Centre NASA , USA ',
      link: 'https://www.youtube.com/watch?v=C6FPsbkO-Uo',
      image: Sid
    },
    {
      id: 3,
      date: 'January 2021',
      name: 'Jarred Wilhite',
      designation: 'Engineer at Glen Research Centre NASA, USA',
      link: 'https://www.youtube.com/watch?v=hLNZ0gG76L8',
      image: Jarred
    },
  ]);
  const [otherinfo, setotherinfo] = useState([
    {
      id: 1,
      date: 'January 2021',
      name: 'Pramod Tanwar',
      designation: 'Senior Scientist CSIR-CEERI',
      link: 'https://www.youtube.com/watch?v=1C2alET4iRA',
      image: space
    },
    {
      id: 2,
      date: 'January 2021',
      name: 'Dr Siddhartha Krishanmoorthy',
      designation: 'Rocket Technologist, NASA JPL',
      link: 'https://www.youtube.com/watch?v=MvlgfU_xC_0',
      image: space
    },
    {
      id: 3,
      date: 'January 2021',
      name: 'Dr Graham Lau',
      designation: 'Host of a NASA Show, Director of Marketing-Outreach Blue Marble Space, USA.',
      link: 'https://www.youtube.com/watch?v=pfRcNDwBpIw',
      image: space
    },
    {
      id: 4,
      date: 'January 2021',
      name: 'Anuradha Mathur',
      designation: 'Co-Ordinator at Swayyam by Education Ministry of India.',
      link: 'https://www.youtube.com/watch?v=PafEwPcIHww',
      image: space
    },
    {
      id: 5,
      date: 'January 2021',
      name: 'Marina Ranga',
      designation: 'Joint Research Centre, European Commission',
      link: 'https://www.youtube.com/watch?v=elWDjxm-26U',
      image: space
    },
    {
      id: 6,
      date: 'January 2021',
      name: 'Luc Piaton',
      designation: 'CEO chez HAPPEE LEARNING',
      link: 'https://www.youtube.com/watch?v=mw-MNwn7gX4',
      image: space
    },
    {
      id: 7,
      date: 'January 2021',
      name: 'Martin Hassler Hallstedt',
      designation: 'PhD, Founder & CEO at Akribian (former Scientific EdTech)',
      link: 'https://www.youtube.com/watch?v=elWDjxm-26U',
      image: space
    },
    {
      id: 8,
      date: 'January 2021',
      name: 'Dr Srihari Prakash Honwad',
      designation: 'Vice Chancellor, SPSU',
      link: 'https://www.youtube.com/watch?v=7qWWjQWbPMU',
      image: space
    },
    {
      id: 9,
      date: 'January 2021',
      name: 'Ekaterina Kologrivaya',
      designation: 'Educational Researcher, Pecking University',
      link: 'https://www.youtube.com/watch?v=elWDjxm-26U',
      image: space
    },
    {
      id: 10,
      date: 'January 2021',
      name: 'Sasi Kumar Nair',
      designation: 'Solution Architect Nvidia',
      link: 'https://www.youtube.com/watch?v=zFQK9Kn9Tog',
      image: space
    },
    {
      id: 11,
      date: 'January 2021',
      name: 'Manju Gupta',
      designation: 'Principal Kothari International School',
      link: 'https://www.youtube.com/watch?v=7qWWjQWbPMU',
      image: space
    },
  ]);
  return (
    <Box
      bg="linear-gradient(180deg, rgba(211,255,250,1) 0%, rgba(188,235,255,1) 26%, rgba(188,235,255,0) 100%) "
    >
      <Container maxWidth="90%">
        <Box>
          <HStack align="center">
            <Text fontSize={{ base: '60px', md: '100px' }} color="#FF53A6">
              &#8226;
            </Text>
            <span></span>{' '}
            <Text
              fontSize={{ base: '25px', md: '40px' }}
              fontFamily="Nunito"
              fontWeight="700"
            >
              {topdate.january2020}
            </Text>
          </HStack>
          <SimpleGrid spacing="50px" minChildWidth="380px" columns="3">
            <TimelineCard thedata={info} />
          </SimpleGrid>
        </Box>
        <Box pt={{ base: '40px', md: '80px' }} mb="150px">
          <HStack align="center">
            <Text fontSize={{ base: '60px', md: '100px' }} color="#FF53A6">
              &#8226;
            </Text>
            <span></span>{' '}
            <Text
              fontSize={{ base: '25px', md: '40px' }}
              fontFamily="Nunito"
              fontWeight="700"
            >
              {topdate.january2021}
            </Text>
          </HStack>
          <SimpleGrid spacing="50px" minChildWidth="400px" columns="3">
            <TimelineCard thedata={otherinfo} />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
