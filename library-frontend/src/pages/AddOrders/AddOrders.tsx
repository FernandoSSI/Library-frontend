import { useEffect, useState } from "react"
import { useAllClientData, useClientDataGet } from "../../hooks/useClientData/useClientDataGet"
import "./AddOrder.css"

export function AddOrders() {

    const {dataClient} = useAllClientData()
    


    return (
        <>
            <div className='add-container'>
                <div className="add-title"><h1>Adicionar pedido</h1></div>
                <form className="input-container">

                    
                </form>
            </div>

        </>
    )
}