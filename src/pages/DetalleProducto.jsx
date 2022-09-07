import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import {getByIdProductos} from "../services/personajeService"
import Loading from "../components/Loading"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const styles={
    Carta:{
        marginTop:"30px",
        justifyContent:"center",
    },
    botones:{
        margin:"5px",
        color:"white",
        textDecoration:"none",
    },
    imagen:{
        marginTop:"15px",
        maxWidth:"80%",
        textAlign:"center",
    }
}

function DetallePage() {
    const {id} = useParams()
    console.log("Id",id)
    const [loading,setLoading] = useState(true)
    const [producto,setProducto] = useState({})
    useEffect(
        ()=>{
            try{
                const request = async ()=>{
                    const response = await getByIdProductos(id)
                    console.log("response",response)
                    setLoading(false)
                    setProducto(response)
                }
                request()
            }catch(e){
                console.log(e)
            }
            
        },
        [id]
    )
    if(loading){
        return (<div>Cargando ...</div>)
    }else{
        return(
            <Loading loading={loading}>
            <Container >          
            <Row  style={styles.Carta} >
                <Col xs={6}>
            <Card   >
                <div style={{textAlign:"center"}}>
                  <Card.Img style={styles.imagen} variant="top" src={producto.image}/>
                </div>
                  <Card.Body>
                    <Card.Title style={{textAlign:"center"}}>{producto.name}</Card.Title>    
                    <Card.Text>
                    <p>Especie: {producto.species}</p>
                    <p>Status: {producto.status}</p>
                    <p>Sexo: {producto.gender}</p>
                    <p>URL: {producto.url}</p>
                  </Card.Text> 
                  <Button variant="dark" style={styles.botones}><Link to={'/'} style={styles.botones}>Volver</Link></Button>        
                  </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
            </Loading>
        )
    }
    

} 

export default DetallePage