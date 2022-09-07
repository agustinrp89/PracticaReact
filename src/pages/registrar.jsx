import React, {useState}  from "react"
import { useForm } from "react-hook-form";
import Input from "../components/input";
import firebase from "../config/Firebase";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AlertCustom from "../components/AlertCustom";
import {loginMessage} from "../Util/errorMessage";



function Registros() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [alert,setAlert] = useState({variant:'',text:''})
    const onSubmit = async (data) =>{    
      console.log("data",data)
      try{
        const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
        console.log(responseUser.user.uid)
        if (responseUser.user.uid){
            const document = await firebase.db.collection("usuarios")
            .add({
              name:data.name,
              lastname:data.lastname,
              telefono:data.telefono,
              userId:responseUser.user.uid
            })
            console.log(document)
        }
      }catch(e){
        console.log(e.code)
        if(e.code==="auth/user-not-found"){

        }
        setAlert({variant:"danger",text:loginMessage[e.code] || "Ha ocurrido un error"})
      }
      
    }

    return (
      <Row className="justify-content-center">
        <Col xs={10} lg={6} >
          <h1 className='mb-4 mt-5 text-center'>Registro</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
             
             <Form.Group className="mb-3">      
                    <Input label="Nombre" name="name" register={{...register("name", { required: true })}} />              
                    {errors.name && <span>Nombre invalido</span>}             
              </Form.Group>
              <Form.Group className="mb-3"> 
                    <Input label="Apellido" name="lastname" register={{...register("lastname", { required: true })}} />                             
                    {errors.lastname && <span>Apellido invalido</span>}    
              </Form.Group>
              <Form.Group className="mb-3"> 
                    <Input label="Email" name="email" type="email" register={{...register("email", { required: true })}} />              
                    {errors.email && <span>Email invalido</span>}                 
              </Form.Group>
              <Form.Group className="mb-3"> 
                    <Input label="Telefono" name="telefono" type="tel" register={{...register("telefono", { required: true })}} />              
                    {errors.telefono && <span>Telefono invalido</span>}                
              </Form.Group>
              <Form.Group className="mb-3"> 
                    <Input label="Password" name="password" type="password" register={{...register("password", { required: true })}} />                                                  
              </Form.Group>   
              <AlertCustom {...alert} />        
              <input type="submit" value="Registrarse" className="btn btn-primary" />       
          </Form>
          </Col>
        </Row>
      );
    
} 

export default Registros