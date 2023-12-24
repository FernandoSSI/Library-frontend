import { useEffect, useState } from "react"
import "./AddOrder.css"
import { useAllClientData } from "../../hooks/useClientData/useClientDataGet"

export function AddOrders() {

    const {dataClient} = useAllClientData()



    return (
        <>
            <div className='add-container'>
                <div className="add-title"><h1>Adicionar pedido</h1></div>
                <form className="input-container">
                    <select name="clients-select" id="clients-select" >
                        {dataClient && dataClient?.map(e=>
                        <option value={e.name}>{e.name}</option>)}
                    </select>
                    
                </form>
            </div>

        </>
    )
}