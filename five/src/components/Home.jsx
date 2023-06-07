import React from 'react';

import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs";

import myPic from "../assets/cartoon_logo_home.png";

export default function Home() {

    const animations = {
        h1 : {
            initial : {
                x: "-100%",
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        },

        button : {
            initial : {
                y: "-100%",
                opacity: 0
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }
  return (
    <div id="home">
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    Hi, I am  <br/> Fahim
                </motion.h1>

                <Typewriter options={{
                    strings: ["A Developer", "A Designer", "A Creator"],
                    autoStart : true,
                    loop: true,
                    cursor: "",
                    wrapperClassName: "typewriterpara"
                }} />


                <div>
                    <a href='mailto:mdfahim1194@gmailcom' >Hire Me</a>
                    <a href="#work">Projects 
                        <BsArrowUpRight />
                    </a>
                </div>
            
               
            </div>
        </section>

       
        <section>
            <img src="" alt='Fahim' />
        </section>

        <BsChevronDown />
    </div>
  )
}
