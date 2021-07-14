import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Container,
  Stack,
  HStack,
  Center,
  chakra,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdArrowForward } from 'react-icons/md';

export const TimelineCard = ({ thedata }) => {
  const template = thedata.map(data => {
    return (
      <Box
        borderTopRadius="40px"
        shadow="lg"
        bg="white" 
        h="420px"
        w={{base:"75%",md:"420px"}}
      >
        <Box  borderTopRadius="40px" bg="rgb(225,72,149,25%)" h="60%"></Box>
        <Box pl="25px" h="40%">
          <Stack spacing="18px">
            <Text fontFamily="Nunito" fontSize="18px" pt="8px">
              {data.date}
            </Text>
            <Text>
              <Heading fontSize="30px">{data.name}</Heading>
              <Text key={data.id} fontFamily="Nunito" fontSize="15px">
                {data.designation}
              </Text>
            </Text>
            <HStack  cursor="pointer" color="gray.500" pb="5px">
              <Text fontFamily="Nunito" fontSize="15px">
                Learn more
              </Text>
              <MdArrowForward fontSize="18px" />
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
    },
    {
      id: 2,
      date: 'January 2021',
      name: 'Dr Matthew Green House',
      designation: 'Project Scientist at Goddard Flight Centre NASA , USA ',
    },
    {
      id: 3,
      date: 'January 2021',
      name: 'Jarred Wilhite',
      designation: 'Engineer at Glen Research Centre NASA, USA',
    },
  ]);
  const [otherinfo, setotherinfo] = useState([
    {
      id: 1,
      date: 'January 2021',
      name: 'Dr DK Aswal',
      designation: 'Director CSIR-CEERI and NPL',
    },
    {
      id: 2,
      date: 'January 2021',
      name: 'Dr Matthew Green House',
      designation: 'Project Scientist at Goddard Flight Centre NASA , USA ',
    },
    {
      id: 3,
      date: 'January 2021',
      name: 'Jarred Wilhite',
      designation: 'Engineer at Glen Research Centre NASA, USA',
    },
    {
      id: 4,
      date: 'January 2021',
      name: 'Dr DK Aswal',
      designation: 'Director CSIR-CEERI and NPL',
    },
    {
      id: 5,
      date: 'January 2021',
      name: 'Dr Matthew Green House',
      designation: 'Project Scientist at Goddard Flight Centre NASA , USA ',
    },
    {
      id: 6,
      date: 'January 2021',
      name: 'Jarred Wilhite',
      designation: 'Engineer at Glen Research Centre NASA, USA',
    },
  ]);
  return (
    <Box 
    bg="linear-gradient(180deg, rgba(211,255,250,1) 0%, rgba(188,235,255,1) 26%, rgba(188,235,255,0) 100%)"
    >
      <Container  maxWidth="90%">
        <Box>
          <HStack align="center">
            <Text fontSize="100px" color="#FF53A6">
              &#8226;
            </Text>
            <span></span>{' '}
            <Text fontSize="40px" fontFamily="Nunito" fontWeight="700">
              {topdate.january2020}
            </Text>
          </HStack>
          <SimpleGrid spacing="50px" minChildWidth="380px" columns="3">
            <TimelineCard thedata={info} />
          </SimpleGrid>
        </Box>
        <Box pt="80px" mb="150px">
          <HStack  align="center">
            <Text fontSize="100px" color="#FF53A6">
              &#8226;
            </Text>
            <span></span>{' '}
            <Text fontSize="40px" fontFamily="Nunito" fontWeight="700">
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
