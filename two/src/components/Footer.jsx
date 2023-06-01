import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'


import {AiOutlineSend} from "react-icons/ai";

export default function Footer() {
  return (
    <Box 
        bgColor={"blackAlpha.900"}
        minH={"40"}
        p="16"
        color={"white"}
        >

       
        
        <Stack  direction={['column', 'row']} spacing='24px'>
            
            <VStack
                alignItems={"stretch"}
                w={"full"}
                px = {'4'}
                textTransform={"uppercase"}
                size={"md"}
                textAlign={["center", "left"]}
            >
                <Heading>
                     Subscribe to get updates
                </Heading>

                <HStack
                    borderBottom={"2px solid white"}
                    py={"2"}
                >
                    <Input 
                          placeholder='Enter email here...'  
                          border={"none"} 
                          borderRadius={"none"} 
                          outline={"none"}
                          focusBorderColor='none'
                          />
                    <Button
                        p={'0'}
                        colorScheme={"purple"}
                        variant={"ghost"}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>


            <VStack
                w={"full"}
                borderLeft={["none", "1px solid white"]}
                borderRight={["none", "1px solid white"]}

            >
                <Heading 
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    >
                        Video Hub
                    </Heading>
                
                <Text>All rights received</Text>
            </VStack>


            <VStack
                w={"full"}
            >
                <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>
                <Button variant={"link"} colorScheme={"white"}>
                    <a  >youtube</a>
                </Button>
                <Button variant={"link"} colorScheme={"white"}>
                    <a  >Instragram</a>
                </Button>
                <Button variant={"link"} colorScheme={"white"}>
                    <a  >Github</a>
                </Button>
            </VStack>

        </Stack>
    </Box>
  )
}
