import React, { useState } from "react"
import { useRouter } from 'next/router'
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';
import Image from 'next/image'
import Logo from './logo.svg'

const Header = () => {
  const [title, setTitle] = useState()

  const router = useRouter(); 

  const HandleNavClick = function(event, stage, text) {
    event.preventDefault();
    setTitle(event.target.innerHTML)
    router.push(stage)
  }

  const Logout = () => {
    deleteCookie("loggedin")
  }

  return (   
    <>
        <nav style={{
          backgroundColor: "#191A4E",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            style={{
              marginLeft: "2vw"
            }}
          />
          <ul style={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            width: "50%",
            minWidth: "150px",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}>
              <li onClick={(e) => HandleNavClick(e, "../home")} style={{
                display: "flex",
                height: "8vw",
                maxHeight: "80px",
                fontSize: "calc(6px + 1vw)",
                cursor: "pointer", 
                paddingLeft: "1vw",
                paddingRight: "1vw",
                background: "#212275",
                borderRadius: "10px",
                color: "white",
                justifyContent: "center",
                alignItems: "center"
              }}>HJEM</li>
              <li onClick={(e) => HandleNavClick(e, "../prices")} style={{
                display: "flex",
                height: "8vw",
                maxHeight: "80px",
                fontSize: "calc(6px + 1vw)",
                cursor: "pointer", 
                paddingLeft: "1vw",
                paddingRight: "1vw",
                background: "#212275",
                borderRadius: "10px",
                color: "white",
                justifyContent: "center",
                alignItems: "center"
              }}>PRISER</li>
              <li style={{fontSize: "calc(6px + 1vw)", cursor: "pointer", background: "#DF4848",  
                paddingLeft: "1vw", paddingRight: "1vw", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", height: "8vw", maxHeight: "80px"}} onClick={() => {
                setCookie("loggedin", false)
                router.push("/")
              }}>LOG UD</li>
          </ul>
        </nav>
    </>      

  )
}

export default Header;