import React from "react"
import NombrePersonaje from '../components/Personajes/NombrePersonaje'
import firebase from "../config/Firebase"


function Homepages(){
        console.log(firebase)
        return(
            <div className="">
                   <NombrePersonaje  />      
            </div>
        )
   
  
} 

export default Homepages