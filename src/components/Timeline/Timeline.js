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
import peopleMobile from '../../media/people2.png';
import bgtimeline from '../../media/bgtimeline.png';

import insidebox from '../../media/Group 17.png';
import Timeline2 from './Timeline2';
import GridTimeline from './GridTimeline';

export default function Timeline() {
  return (
    <>
      <Box
        h={{base:"500px",md:"900px"}}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundImage={bgtimeline}
      >
        <Box
          h={{base:"135%",md:"103%"}}
          backgroundPosition="right"
          backgroundRepeat="no-repeat"
          // backgroundSize="contain"
          backgroundImage={{base:peopleMobile,md:people}}
        >
          <Container maxW={{ base: '100%', md: '95%' }}>
            <Stack w="100%" direction={{ base: 'column', md: 'row' }}>
              <Stack flex={1}>
                <Text
                  mt={{base:"0px",md:"18px"}}
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
              </Stack>
              <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                position={'relative'}
                w={'full'}
              >
                <Box position={'relative'}></Box>
              </Flex>
            </Stack>
          </Container>
        </Box>
      </Box>
      <Timeline2 />
      <GridTimeline />
    </>
  );
}
