import {
  Box,
  Container,
  VStack,
  Text,
  Center,
  Image,
  Flex,
  Button,
  Collapse,
  Spacer,
  
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useDisclosure } from "@chakra-ui/react"
import icon1 from '../media/icon1.png';
import icon2 from '../media/icon2.png';
import icon3 from '../media/icon3.png';
export default function Faqs() {
  const { isOpen, onToggle } = useDisclosure()
  const { isOpen:isOpen1, onToggle:onToggle1 } = useDisclosure()
  const { isOpen:isOpen2, onToggle:onToggle2 } = useDisclosure()
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
          <VStack spacing="30px" mb="100px">
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
              <Text fontSize={{ base: "15px", md: "25px" }} fontWeight="500" >
                What is Kalam Labs?
              </Text>
              <Spacer />
              <Button onClick={onToggle} alignContent="flex-end"><ChevronDownIcon w={6} h={6} color="purple.500"/></Button>
            </Box>
              <Collapse in={isOpen} animateOpacity>
                <Box
                  color="black"
                  h="100px"
                >
                  <Text fontSize={{base:"12px",md:"20px"}}>
                    We are a Finland Education Ministry awarded startup. Through our unique gamified teaching, we help <br></br>kids learn interesting science topics!
                  </Text>
                </Box>
              </Collapse>

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
              <Text fontSize={{ base: "15px", md: "25px" }} fontWeight="500">Are these Live sessions interactive?</Text>{' '}
              <Spacer />
              <Button onClick={onToggle1} alignContent="flex-end"><ChevronDownIcon w={6} h={6} color="purple.500"/></Button>
            </Box>

              <Collapse in={isOpen1} animateOpacity>
                <Box
                  color="black"
                  h="100px"
                >
                  <Text fontSize={{base:"12px",md:"20px"}}>
                  The coolest science topics not typically taught in schools:- Space, Universe, Black Holes, <br></br>Dinosaurs and much more!
                  </Text>
                </Box>
              </Collapse>
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
              <Text fontSize={{ base: "15px", md: "25px" }} fontWeight="500" >
                When? Where? and How can I attend these live sessions?
              </Text>{' '}
              <Spacer />
              <Button onClick={onToggle2} alignContent="flex-end"><ChevronDownIcon w={6} h={6} color="purple.500"/></Button>
            </Box>
              <Collapse in={isOpen2} animateOpacity>
                <Box
                  color="black"
                  h="100px"
                >
                  <Text fontSize={{base:"12px",md:"20px"}}>
                    Click “Join Now” and Register Today!. Your child will get a Kalam Labs app where they’ll play and <br></br>learn science Daily!
                  </Text>
                </Box>
              </Collapse>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
