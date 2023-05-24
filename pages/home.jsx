import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import Header from "@/components/Header";

const HomePage = (props) => {

  const [isLoading, setIsLoading] = useState(true)
  const [price, setPrice] = useState()
  const [charge, setCharge] = useState()
  const [relay, setRelay] = useState()
  const router = useRouter()

  const HandlePrice = (event) => {
    setPrice(event.target.value)
  }

  const HandleCharge = (event) => {
    setCharge(event.target.value)
  }

  const HandleRelay = (event) => {
    setRelay(event.target.value)
  }

  const HandleSubmit = () => {
    var tempSetting = {
        id: props.data[0].id,
        price: price,
        charge: charge,
        relays: relay
    }

    fetch("/api/setting/" + tempSetting.id, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(tempSetting)
      }).then(res => res.json()).then(json => {
        setPrice(json[0].price)
        setCharge(json[0].charge)
        setRelay(json[0].relays)
      })
  }

  useEffect(() => {
    var check = getCookie("loggedin")
      if (check != true) {
          router.push("../")
      } else {
        setPrice(props.data[0].price)
        setCharge(props.data[0].charge)
        setRelay(props.data[0].relays)
        setIsLoading(!isLoading)
      }
  }, [])

  if (isLoading) return
  return(
    <>
      <Header />
      <form onSubmit={(event) => {
        event.preventDefault()
        HandleSubmit()
      }} style={{
        display: "flex",
        flexDirection: "column",
        gap: "2vh",
      }}>
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "2vh"
        }}>
          <label style={{width: "15%"}}>Elpris</label>
          <input value={price} onChange={HandlePrice} style={{width: "50%"}}></input>
        </div>
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly"
        }}>
          <label style={{width: "15%"}}>Afgifter</label>
          <input value={charge} onChange={HandleCharge} style={{width: "50%"}}></input>
        </div>
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly"
        }}>
          <label style={{width: "15%"}}>Relæer</label>
          <input value={relay} onChange={HandleRelay} style={{width: "50%"}}></input>
        </div>
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}>
          <button type="submit" style={{
            width: "50%",
            marginTop: "5vh"
          }}>Gem</button>
        </div>
      </form>
    </>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const settings = await prisma.setting.findMany()

  return { props : { data: JSON.parse(JSON.stringify(settings)) } }
}

export default HomePage;