import React from 'react'

import '../styles/home.scss'
import vg from '../assets/2.webp';

import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";

export default function Home() {
  return (

    <>
        <div className="home" id="home">
            <main>
                <h1>TechyStar</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics"/>

            <div>
                <p>
                    We are your one and only solution to the tech problems you face every day. 
                    We are leading tech company whose aim is to increase the problem solving ability in children
                </p>
            </div>
        </div>



        <div className="home3">
            <div>
                <h1>Who we are? </h1>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nisi sint laborum, obcaecati quidem, reprehenderit fugiat blanditiis rem et amet, odio libero repellat sapiente possimus deleniti provident. Aut corrupti deleniti temporibus reiciendis necessitatibus quia quae dolores! Omnis cum dicta, architecto eius voluptates ipsa earum dolores assumenda ad et porro optio perspiciatis odio corporis quisquam. Ratione ipsa quam numquam consequuntur quas.
                </p>
            </div>
        </div>


        <div className="home4" id="about">
            <div>
                <h1>
                    Brands
                </h1>

                <article>
                    <div style={{
                        animationDelay: "0.3s"
                    }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div style={{
                        animationDelay: "0.5s"
                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>

                    <div style={{
                        animationDelay: "0.7s"
                    }}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>

                    <div style={{
                        animationDelay: "1s"
                    }}>
                        <AiFillInstagram />
                        <p>Instragram</p>
                    </div>

                </article>
            </div>
        </div>
    </>
    
  )
}
