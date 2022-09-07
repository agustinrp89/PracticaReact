import React,{useState,useEffect} from "react"
import Personaje from "./Personajes"
import Loading from "../Loading"
import {getAllPers} from '../../services/personajeService'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const styles={
    Titulo:{
        margin:"20px",
        textAlign:"center",
    }
}

function NombreDePersonaje(){
    const [loading,setLoading] = useState(true)  
    const [Nombre,setNombre] = useState([])
   

    useEffect(
        ()=>{
            
                const request = async ()=>{
                    try{
                        const response = await getAllPers()
                        console.log(response.data)                       
                        setNombre(response.data.results)                      
                        setLoading(false)
                        console.log(response.data.results)
                        
                       
                     

                    }catch(e){
                        console.log(e)
                    }

                    
                }
                request()
        },
        []
    )
  
  

    if(loading){
            return(<div>Cargando...</div>)
    }else{
        const titulo = "Listado de personajes"
        return(
            <Loading loading={loading} configuration={{variant:"danger"}}>
            <Container>
                <Row style={styles.Titulo}>
               <h1  >{titulo}</h1>
               </Row>
                   
                    {Nombre.map(productoData=><Personaje key={productoData.id} data={productoData} id={productoData.id} />)}  
       
               

            </Container>
            </Loading>
           
                   
            
            
        )
      
    }
  
}


export default NombreDePersonaje
