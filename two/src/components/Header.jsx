import React from 'react'

import {
        Drawer, 
        DrawerBody, 
        DrawerHeader, 
        DrawerOverlay,
        DrawerContent,
        DrawerCloseButton,
        Button,
        DrawerFooter,
        Stack,
        VStack,
        HStack
    } from '@chakra-ui/react';

import {Link} from 'react-router-dom';
import  {BiMenuAltLeft} from 'react-icons/bi'; 

import { useDisclosure } from '@chakra-ui/react';

export default function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  

  return (
    <>
        <Button
            ref={btnRef}
            onClick={onOpen}
            pos={'fixed'}
            top={'4'}
            left={'4'}
            colorScheme="purple"
            p={'0'}
            w={'10'}
            h={'10'}
            borderRadius = {'full'}
            zIndex={"overlay"}
            >
            <BiMenuAltLeft size={'20'} />
        </Button>


       
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>



          <DrawerBody>
            <VStack alignItems={"flex-start"}>
                <Button 
                    variant={"ghost"} 
                    colorScheme={'purple'} 

                    onClick={onClose}
                    
                    >
                    <Link to = {'/'}>Home</Link>
                </Button>

                <Button 
                    variant={"ghost"} 
                    colorScheme={'purple'} 
                    onClick={onClose}
                    
                    >
                    <Link to = {'/videos'}>Videos</Link>
                </Button>

                <Button
                    variant={"ghost"} 
                    colorScheme={'purple'} 
                    onClick={onClose}
                    
                    >
                    <Link to = {'/videos?category=free'}>Free Videos</Link>
                </Button>


                <Button
                    variant={"ghost"} 
                    colorScheme={'purple'} 
                    onClick={onClose}
                    
                    >
                    <Link to = {'/upload'}>Upload Video</Link>
                </Button>

            </VStack>


            <HStack 
                pos={'absolute'}
                bottom={'10'}
                left={'0'}
                w={"full"}
                justifyContent={'space-evenly'}
                
            >
                <Button 
                    onClick={onClose}
                    colorScheme='purple'>
                    <Link to={"/login"} >Login</Link>
                </Button>

                <Button 
                    onClick={onClose}
                    colorScheme='purple' variant={'outline'}>
                    <Link to={"/signup"} >Signup</Link>
                </Button>
            </HStack>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
   
    </>
  )
}
