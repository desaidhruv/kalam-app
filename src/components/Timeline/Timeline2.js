import React from 'react'
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
    Center,
} from '@chakra-ui/react';
import Chlid from '../../media/live.png';

function Timeline2() {
    return (
        <Stack direction={{base:"column",md:"row"}} h="600px">
            <Box as={Flex} w={{base:"100%",md:"50%"}} justifyContent="center" alignItems="center">
                <Box h="350px" w="80%" shadow="2xl" borderRadius="55px">
                </Box>
            </Box>
            <Box as={Flex} justifyContent="center" alignItems="center">
                <Box as={Center} w="700px">
                    <Text fontSize={{base:"20px",md:"30px"}} pl="25px" pb="50px">
                        Interactive live sessions with world class speakers and scientists who inspires us daily with their work and inventions available to you just on a click.
                    </Text>
                </Box>
            </Box>
        </Stack>
    )
}

export default Timeline2
