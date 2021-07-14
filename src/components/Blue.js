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

export default function Blue() {
    // style={{clipPath:"ellipse(80% 50% at 50% 45%)"}} bgGradient="linear(to-b, #BCEBFF, #AED8FF, #FF95C2, #FFC4B1)
    return (
        <Box bgGradient="linear(to-b, rgb(188,235,255,100%), rgb(188,235,255,0%))">
            {/* <Image position="absolute" zIndex="-5" w="100%" top={{ base: "0px", md: "100px" }} src={Svg}></Image> */}
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}
            >
                <Stack
                    flex={1}
                    ml={{ base: '5px', md: '80px' }}
                    w={{ base: '350px', md: '1000px' }}
                    spacing={{ md: 10 }}
                >
                    <Text
                    mb="20px"
                        color="black"
                        fontSize={{ base: '20px', md: '25px' }}
                        fontWeight="400"
                        style={{ fontFamily: "'Nunito'" }}
                    >
                        Get your child to learn everyday.Get your child to learn everyday. Get your child to learn evryday Get your child to learn evryday.Get your child to learn evryday
                    </Text>
                    <Button
                        // mt="400px"

                        boxShadow="xl"
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
                        }}
                    >
                        Join now
                    </Button>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}
                    ></Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}
                >
                    <Box
                     
                        position={'relative'}
                        width={'full'}
                        overflow={'hidden'}
                    >
                        <Image
                            alt={'Hero Image'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={Chlid}
                        />
                    </Box>
                </Flex>
            </Stack>
        </Box>
    );
}