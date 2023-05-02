import React from 'react'
import { PrismaClient } from '@prisma/client'

const Price = ({price, setPrices, charge}) => {

    const CalculatedPrice = price.price + charge

    const DeleteLog = (price) => {
        fetch("/api/price/" + price.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            }).then(res => res.json()).then(json => {
                setPrices(json)
            })
    }

    const FormatDate = (date1, date2) => {
      var year = new Date(date1).getFullYear()
      var month = new Date(date1).getMonth()
      var day = new Date(date1).getDate()
      var hour1 = (new Date(date1).getUTCHours()<10?'0':'') + new Date(date1).getUTCHours()
      var hour2 = (new Date(date2).getUTCHours()<10?'0':'') + new Date(date2).getUTCHours()
  
      var formatedDate = day + "-" + month + "-" + year + " : " + hour1 + " - " + hour2
      return formatedDate
    }

    return(
        <div style={{
            display: "flex",
            width: "99%",
            border: "1px solid black",
            marginTop: "0.2vw",
            marginBottom: "0.2vw",
            justifyContent: "end",
            borderRadius: "11px",
        }}>
            <div style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <h1 style={{margin: 0, fontSize: "1.5vw", width: "25%", display: "flex", justifyContent: "center"}}>{String(price.price).substring(0, 4)} Kr</h1>
                <h1 style={{margin: 0, fontSize: "1.5vw", width: "25%", display: "flex", justifyContent: "center"}}>{String(charge).substring(0, 4)} Kr</h1>
                <h1 style={{margin: 0, fontSize: "1.5vw", width: "25%", display: "flex", justifyContent: "center"}}>{String(CalculatedPrice).substring(0, 4)} Kr</h1>
                <h1 style={{margin: 0, fontSize: "1.5vw", width: "25%", display: "flex", justifyContent: "center"}}>{FormatDate(price.starttime, price.endtime)}</h1>
            </div>
        </div>
    )
}
  

export default Price