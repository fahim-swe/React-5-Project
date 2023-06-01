import { Box, Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react';

import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from 'react';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import Img5 from '../assets/5.png';


const headingOptions = {
    pos: 'absolute',
    left: "50%",
    top: "50%",
    transform : "translate(-50%, -50%)",
    textTransform : "uppercase",
    p: "4",
    size : "4xl"
}

export default function Home() {
  return (
    <Box>
        <div>
            <MyCarousel />
        </div>
        <Container maxW={'container.xl'} minH={'100vh'}  p="16">
            <Heading textTransform={"uppercase"} py="2" w="fit-content" borderBottom = "2px solid" m="auto">
                Service
            </Heading>

            <Stack 
                h="full"
                p="4"
                alignItems={"center"}
                direction={["column", "row"]}

                >

                <Image src={Img5} filter={"hue-rotate(-130deg)"} h={["40", "400"]} />

                <Text
                    letterSpacing={"widest"}
                    lineHeight={"190%"}
                    p={["4", "16"]}
                    textAlign={"center"}
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas natus facere blanditiis? Modi officiis quod quae perspiciatis provident enim! Voluptates iure quam voluptatem numquam delectus dolor placeat ipsa nesciunt corrupti porro officia itaque possimus voluptate a repudiandae laboriosam non sint, adipisci ab corporis tempore? Modi odio voluptas repudiandae blanditiis mollitia.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In necessitatibus non enim tempore deleniti aliquid, cum modi voluptate mollitia, quisquam suscipit illo soluta, dolorem ullam itaque aperiam sed quibusdam magnam. Inventore harum deserunt repellendus, accusantium rerum atque maxime. Maxime ad alias non dolores, aperiam provident dicta cumque sed assumenda harum!
                </Text>

            </Stack>
        </Container>        
    </Box>
  )
}



const MyCarousel = () => (
    <Carousel
        autoPlay 
        infiniteLoop
        interval={1000}
        showStatus = {false}
        showThumbs = {false}
        showArrows = {false}
    >

        <Box w="full" h={'100vh'}>
           
            <Image src={img1} h="full" w={'full'} objectFit={'cover'}   />
        
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future
            </Heading>
            </Box>
            <Box w="full" h={'100vh'}>
            <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                Future is Gaming
            </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on Console
            </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
            <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night life is cool
            </Heading>
            </Box>


    </Carousel>
)