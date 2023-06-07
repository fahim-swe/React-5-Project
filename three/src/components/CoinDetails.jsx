import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {server} from '../index.js'
import { Container, HStack, Heading } from '@chakra-ui/react';

import {AiFillCaretDown} from "react-icons/ai";
import {FiArrowDownRight} from "react-icons/fi";

import '../styles/coinDetails.scss';

export default function CoinDetails() {

  const params = useParams();

  useEffect(()=>{
    const fetchCoin = async() => {
      try{
        const {data} = await axios.get(`${server}//coins/${params.id}`);
        
        console.log(data);
    
      } catch(error){
        
      }
    }

    fetchCoin();

  }, []);



  return (
    
    <>
      <div className="coinDetails">
        <div className="introSection">
          <div className="leftSide">
            <p style={{
              background: "black",
              color: "white",
              display: "inline",
              textAlign: "center",
              borderRadius: "5px",
              padding: "2px"
            }}>
              Rank #1
            </p>
            
            <div style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "4px",
              alignItems: "center"
            }}>
              <img style={{
                width: "40px",
                height: "40px",
                padding: "5px"
              }} src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" />
              <h3>Bitcoin</h3>
              <p>BTC</p>
            </div>

            <div style={{
              display: "flex"
            }}>
              <p>$27, 054.41 </p>
              <AiFillCaretDown />
              <p style={{
                
              }}>0.3 %</p>
            </div>


            <div>
              1.0000000000000000 BTC  0.0% <FiArrowDownRight />
            </div>
          </div>
          <div className="rightSide">
            2
          </div>
        </div>
      </div>
    </>
    
  )
}
