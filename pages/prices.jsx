import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { PrismaClient } from "@prisma/client";
import Price from "@/components/price"

const HomePage = (props) => {

  const [isLoading, setIsLoading] = useState(true)
  const [prices, setPrices] = useState()
  const [charge, setCharge] = useState()
  const router = useRouter()

  useEffect(() => {
    var check = getCookie("loggedin")
      if (check != true) {
          router.push("../")
      } else {
        setPrices(props.prices)
        setCharge(props.charge[0].charge)
        setIsLoading(!isLoading)
      }
  }, [])

  if (isLoading) return
  return(
    <>
      <Header />
      <div style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
          <h1 style={{
              fontSize: "3vw"
          }}>Priser</h1>
          <div style={{
            display: "flex",
            width: "80%",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <div style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly"
            }}>
              <h1 style={{width: "25%", display: "flex", justifyContent: "center", fontSize: "2vw"}}>Rå</h1>
              <h1 style={{width: "25%", display: "flex", justifyContent: "center", fontSize: "2vw"}}>Afgift</h1>
              <h1 style={{width: "25%", display: "flex", justifyContent: "center", fontSize: "2vw"}}>Samlet</h1>
              <h1 style={{width: "25%", display: "flex", justifyContent: "center", fontSize: "2vw"}}>Tid</h1>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "700px",
                border: "2px solid black",
                alignItems: "center",
                overflow: "auto",
            }}>
              {
                prices.map((price) => {
                  return(
                      <Price price={price} setPrices={setPrices} charge={charge} key={price.id}/>
                  )
                })
              }
            </div>
          </div>
      </div>
    </>
  )
}


export async function getStaticProps() {
  const prisma = new PrismaClient()
  const prices = await prisma.pricerecord.findMany()
  const charge = await prisma.setting.findMany()

  return { props : { prices: JSON.parse(JSON.stringify(prices)), charge: JSON.parse(JSON.stringify(charge)) } }
}
  

export default HomePage;

