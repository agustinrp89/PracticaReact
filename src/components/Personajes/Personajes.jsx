import React,{useState} from "react"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import AuthContext from "../../context/AuthContext";


const styles={
        cardStyle:{
            display:"inline-block",            
            padding:"5px",
            textAlign: "center",
            
        },
        botones:{
            margin:"5px",
            color:"white",
            textDecoration:"none",
        },
        Titulo:{
            textAlign:"center",
        }
        
}

// function Producto({nombre,precio}){
function Personaje(props){
    const {data} = props
    const [mensaje,setMensaje] = useState('')
    const handleClick = ()=>{
        console.log("Id producto",data.id)
        setMensaje("Gracias por su compra")
    } 
    return(
        <AuthContext.Consumer>
                {
                    context=>
                    <Col  xs={12} md={6} lg={4} style={styles.cardStyle}>
                    <Card >
                    <Card.Img variant="top" src={data.image}/>
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        {
                            context.isLogin &&
                                <>
                                    <Button variant="primary" onClick={handleClick} style={styles.botones}>Comprar</Button>                      
                                    <Button variant="dark" style={styles.botones}><Link to={'/detalle/'+data.id} style={styles.botones}>Detalle</Link></Button>
                                                
                                </>
                        }
                       
                    
                        
                        <div>{mensaje}</div>
                    </Card.Body>
                    </Card>
                </Col>
                }
        </AuthContext.Consumer>
           
        
            
    )
}
export default Personaje