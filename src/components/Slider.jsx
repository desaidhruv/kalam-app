import { Link as ReLink } from "react-router-dom";
import React, { Component } from 'react';
import Slider from 'react-slick';
import {
  Container,
  Flex,
  Box,
  Text,
  Button,
  Image,
  Link,
} from '@chakra-ui/react';
import madhav from '../media/image 6.png';
import naveen from '../media/naveen.jpeg';
import aarush from '../media/aarush.png';
import shruti from '../media/shruti.png';
import dhriti from '../media/dhriti.png';
import Snehal from '../media/Snehal.jpeg';

export default class Responsive extends Component {
  render() {
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    };
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Container mb="30px" maxW="90%" mt="50px">
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <Box

              boxSize="320px"
              maxW="sm"

              overflow="hidden"
            >
              <Box as={Flex} justifyContent="center" alignContent="center">
                <Image w="220px" shadow="dark-lg" borderRadius="50px" h="200px" src={madhav} alt={property.imageAlt} />
              </Box>

              <Box>
                <Box
                  fontWeight="semibold"
                  // as="h4"
                  // lineHeight="tight"
                  isTruncated
                  textAlign="center"
                >

                  <Text w="100%" fontSize="13px" mt="20px" fontStyle="normal" size="sm">
                    “Kalam Labs helps me take  rocket <br />
                    to Jupiter and learn
                    gravity & Science”
                  </Text>
                  <Text fontSize="20px" mt="8px">Madhav Jha</Text>
                </Box>


              </Box>
            </Box>
          </div>
          <div>
            <Box

              boxSize="320px"
              maxW="sm"

              overflow="hidden"
            >
              <Box as={Flex} justifyContent="center" alignContent="center">
                <Image w="220px" shadow="dark-lg" borderRadius="50px" h="200px" src={Snehal} />
              </Box>

              <Box>
                <Box
                  fontWeight="semibold"
                  // as="h4"
                  // lineHeight="tight"
                  isTruncated
                  textAlign="center"
                >

                  <Text w="100%" fontSize="13px" mt="20px" fontStyle="normal" size="sm">
                    “Kalam Labs is a Science World <br /> where I can learn every <br /> science topic I Love!”
                  </Text>
                  <Text fontSize="20px" mt="8px">Snehal</Text>
                </Box>


              </Box>
            </Box>
          </div>
          <div>
            <Box

              boxSize="320px"
              maxW="sm"

              overflow="hidden"
            >
              <Box as={Flex} justifyContent="center" alignContent="center">
                <Image w="220px" shadow="dark-lg" borderRadius="50px" h="200px" src={aarush} />
              </Box>

              <Box>
                <Box
                  fontWeight="semibold"
                  // as="h4"
                  // lineHeight="tight"
                  isTruncated
                  textAlign="center"
                >

                  <Text w="100%" fontSize="13px" mt="20px" fontStyle="normal" size="sm">
                    “The virtual reality tool is the
                    best <br /> way to experience a
                  </Text>
                  <Text fontSize="20px" mt="8px">Arush Sharma</Text>
                </Box>


              </Box>
            </Box>
          </div>
          <div>
            <Box

              boxSize="320px"
              maxW="sm"

              overflow="hidden"
            >
              <Box as={Flex} justifyContent="center" alignContent="center">
                <Image w="220px" shadow="dark-lg" borderRadius="50px" h="200px" src={shruti} />
              </Box>

              <Box>
                <Box
                  fontWeight="semibold"
                  // as="h4"
                  // lineHeight="tight"
                  isTruncated
                  textAlign="center"
                >

                  <Text w="100%" fontSize="13px" mt="20px" fontStyle="normal" size="sm">
                    “A platform where I can <br />explore the space with <br />the comfort of my home”
                  </Text>
                  <Text fontSize="20px" mt="8px">Shruti</Text>
                </Box>


              </Box>
            </Box>
          </div>



          {/* <div>
            <Box
              boxShadow="lg"
              boxSize="320px"
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box as={Flex} justifyContent="center" alignContent="center">
                <Image h="200px" src={aarush} alt={property.imageAlt} />
              </Box>

              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  textAlign="center"
                >
                  Madhav Sharma <br />
                  4th Class
                </Box>

                <Box></Box>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              boxShadow="lg"
              boxSize="320px"
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box as={Flex} justifyContent="center" alignContent="center">
                <Image h="200px" src={aarush} alt={property.imageAlt} />
              </Box>

              <Box h="500px">
                <Box
                  // mt="1"
                  fontWeight="semibold"
                  // as="h4"
                  lineHeight="tight"
                  isTruncated
                  textAlign="center"
                >
                  Madhav Sharma <br />
                  4th Class
                </Box>

                <Box></Box>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              boxShadow="lg"
              boxSize="320px"
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box as={Flex} justifyContent="center" alignContent="center">
                <Image h="200px" src={aarush} alt={property.imageAlt} />
              </Box>

              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  textAlign="center"
                >
                  Madhav Sharma <br />
                  4th Class
                </Box>

                <Box></Box>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              boxShadow="lg"
              boxSize="320px"
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box as={Flex} justifyContent="center" alignContent="center">
                <Image h="200px" src={aarush} alt={property.imageAlt} />
              </Box>

              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  textAlign="center"
                >
                  Madhav Sharma <br />
                  4th Class
                </Box>

                <Box></Box>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              boxShadow="lg"
              boxSize="320px"
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box as={Flex} justifyContent="center" alignContent="center">
                <Image h="200px" src={aarush} alt={property.imageAlt} />
              </Box>

              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  textAlign="center"
                >
                  Madhav Sharma <br />
                  4th Class
                </Box>

                <Box></Box>
              </Box>
            </Box>
          </div> */}

        </Slider>

        {/* <Button  mt="80px"
            mb="50px"
            boxShadow="lg"
            size="xl"
            height="40px"
            width="150px"
            color="white"
            fontSize="25px"
            borderRadius="60px"
            bg="#379FFF"
            _hover={{ bg: 'blue' }}
            _active={{
              bg: '#dddfe2',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }} className="button" onClick={this.play}>
            Play
          </Button>
          <Button  mt="80px"
            mb="50px"
            boxShadow="lg"
            size="xl"
            height="40px"
            width="150px"
            color="white"
            fontSize="25px"
            borderRadius="60px"
            bg="#379FFF"
            _hover={{ bg: 'blue' }}
            _active={{
              bg: '#dddfe2',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }} className="button" onClick={this.pause}>
            Pause
          </Button> */}
        <Box justifyContent="center" alignItems="center" as={Flex}>
          <Button
            as={Link}
            href="https://rzp.io/l/virtualspacetour"
            mt="80px"
            mb="50px"
            boxShadow="lg"
            size="xl"
            height={{ base: "30px", md: "40px" }}
            width={{ base: "100px", md: "150px" }}
            fontSize={{ base: "18px", md: "25px" }}
            color="white"
            style={{ textDecoration: "none" }}
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
        </Box>
      </Container>
    );
  }
}
