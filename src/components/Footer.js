import {
  Box,
  Center,
  Container,
  Image,
  Spacer,
  Stack,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import logo from '../media/logo.png';
import footerBg from '../media/footerBg.png';
import { Text } from '@chakra-ui/layout';

export const Copyright = props => (
  <Text m="30px" fontSize={{ base: '10px', md: '20px' }} textAlign="center"{...props}>
    Elixar Systems Private Limited trademark may be used publicly only with
    written permission from Elixar Systems Private Limited.
  </Text>
);

export default function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py="6"
      px={{
        base: '4',
        md: '3',
      }}
      backgroundImage={footerBg}
    >
      <Container maxW="98%" >
        <Stack>
          <VStack mb="20px" direction="row" spacing="5" alignItems="start">
            <Image ml="-35px" to="/" src={logo} h="120px"></Image>

            <Text fontWeight="700" fontSize="25px">
              Kalam Labs
            </Text>
          </VStack>

          <Text textAlign="left" fontSize={{ base: '10px', md: '20px' }}>
            The Elixar Systems Private Limited<sup>&reg;</sup> and Kalam Labs<sup>&reg;</sup> names and logos,
            as well as any other Elixar Systems<sup>&reg;</sup> Private Limited service or
            product names or logos displayed on the Elixar Systems Private
            Limited<sup>&reg;</sup> website and on Kalam Labs<sup>&reg;</sup> website are registered trademarks
            of Elixar Systems Private Limited.<sup>&reg;</sup>
            <br /> <br /> The following are trademark of Elixar Systems Private
            Limited.<sup>&reg;</sup> These trademark may not be used in connection with any
            product or service not owned by Elixar Systems Private Limited, in
            any manner that is likely to cause confusion among coustomers, or in
            any manner that disparate or discredit Elixar Systems Private
            Limited.
          </Text>
        </Stack>
        <Center>
          <Copyright />
        </Center>
        <Stack w="100%" color="gray.500" direction="row">
          <Text textAlign="left" w="50%" fontSize={{base:"8px",md:"20px"}}>
            B-46, Benchmark Township Behind Mahalaxmi Puram Baran Road, Kota,
            Rajasthan , India 324001
          </Text>
          <Spacer />
          <Text textAlign="right" w="50%" fontSize={{base:"8px",md:"20px"}}>
            Kalam Labs&trade; (Elixar Systems Pvt Ltd) . All rights reserved. 2021
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
