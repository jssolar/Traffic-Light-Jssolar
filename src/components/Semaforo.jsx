import React, { useState } from "react";
import './App.css'

const Semaforo = () => {
    const [color, setColor] = useState("")
    const botones = (color) => {
        setColor(color)
    }
    


console.log(color)
    return(
        <header className="semaforo-contenedor">
            <div className="semaforo-luces">
                <button   onClick = {() => botones('v')} className={color === 'v'?'encendido-verde': 'verde'}></button>
                <button   onClick = {() => botones("a")}  className={color === 'a'?'encendido-amarillo': 'amarillo'}></button>
                <button   onClick = {() => botones("r")} className={color ==='r'? 'encendido-rojo':'rojo'}></button>
            </div>
        </header>
    )

};

export default Semaforo;
