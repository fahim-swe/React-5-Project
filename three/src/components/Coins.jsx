import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '..'
import { Button, Container, HStack, RadioGroup, Stack, Radio } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';
import CoinCard from './CoinCard';

export default function Coins() {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");



  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : currency === "usd" ? "$" : "৳";

  const changePage = (newpage) => {

    if(page != newpage){
      setPage(newpage);
      setLoading(true);
    }
  }

  const btns = new Array(132).fill(1);

  useEffect(()=>{
    const fetchCoins = async() => {

      try{
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      
        setCoins(data);
        console.log(data);
        setLoading(false);
      } catch(error){
        setLoading(false)
        setError(true);
      }
      
    }

    fetchCoins();

  }, [currency, page])

  if(error) return <Error message = {"Error while Fetching Coins"} />

  return (
    <Container  maxW={"container.xl"} >
       {loading ? <Loader /> : <>

       <HStack p={"8"} >
          <RadioGroup onChange={setCurrency} value={currency}>
              <Stack spacing={"4"} direction='row'>
                <Radio value='inr'>Indian (₹)</Radio>
                <Radio value='bdt'>Bangladesh (৳)</Radio>
                <Radio value='eur'>Euro (€)</Radio>
                <Radio value='usd'>Dollar ($)</Radio>
                
              </Stack>
          </RadioGroup>
       </HStack>
      
       
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>

        id, name, img, symbol, price, currencySymbol
          {
            coins.map((coin)=>(
              <CoinCard
                id = {coin.id}
                key = {coin.id}
                name = {coin.name}
                price={coin.current_price}
                img = {coin.image}
                symbol = {coin.symbol}
                currencySymbol = {currencySymbol}

              />
            ))
          }
       
       </HStack>


       <HStack w={"full"} overflowX={"auto"} p={"8"}>

          {
            btns.map((item, index)=>(
              <Button 
                  key={index}
                  bgColor={"blackAlpha.900"} 
                  color={"white"} 
                  onClick={()=> changePage(index+1)}
              >
                {index+1}
              </Button>
            ))
          }
         
       </HStack>
       </>}
    </Container>
  )
}



