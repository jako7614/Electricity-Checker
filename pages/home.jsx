import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import Header from "@/components/Header";

const HomePage = (props) => {

  const [isLoading, setIsLoading] = useState(true)
  const [price, setPrice] = useState()
  const [charge, setCharge] = useState()
  const router = useRouter()

  const HandlePrice = (event) => {
    setPrice(event.target.value)
  }

  const HandleCharge = (event) => {
    setCharge(event.target.value)
  }

  const HandleSubmit = () => {
    var tempSetting = {
        id: props.data[0].id,
        price: price,
        charge: charge
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
      })
  }

  useEffect(() => {
    var check = getCookie("loggedin")
      if (check != true) {
          router.push("../")
      } else {
        setPrice(props.data[0].price)
        setCharge(props.data[0].charge)
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
      }}>
        <label>Elpris</label>
        <input value={price} onChange={HandlePrice}></input>
        <label>Afgifter</label>
        <input value={charge} onChange={HandleCharge}></input>
        <button type="submit">Gem</button>
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