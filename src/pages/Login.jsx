import React, {useState,useContext}  from "react"
import Input from "../components/input"
import { useForm } from "react-hook-form";
import firebase from "../config/Firebase";
import AuthContext from "../context/AuthContext";
import AlertCustom from "../components/AlertCustom";
import {loginMessage} from "../Util/errorMessage";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Login (){
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [alert,setAlert] = useState({variant:'',text:''})
    const context = useContext(AuthContext)

    const onSubmit = async (data) =>{  
        console.log("data",data)
        try{
          const responseUser =  await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
          console.log(responseUser.user.uid)
          if (responseUser.user.uid){
            const user = await firebase.db.collection("usuarios")
            .where("userId","==",responseUser.user.uid)
            .get()
            context.loginUser(user.docs[0].data())
            setAlert ({variant:"success", text:"Bienvenido" + user.docs[0].data().name})
            
          }
          
        } catch(e){
            console.log(e.code)
            if(e.code==="auth/user-not-found"){

            }
            setAlert({variant:"danger",text:loginMessage[e.code] || "Ha ocurrido un error"})
        }
    } 
    
        return(
            <Row className="justify-content-center">
              <Col xs={6} lg={4} >
        
                  <h1 className='mb-4 mt-5 text-center'>Login</h1>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                
                <div>      
                <Input label="Email" name="email" type="email" register={{...register("email", { required: true })}} />           
                        {errors.email && <span>Email invalido</span>}             
                  </div>
                  <div>      
                  <Input label="Password" name="password" type="password" register={{...register("password", { required: true })}} />            
                        {errors.password && <span>Password invalido</span>}             
                  </div>
                    <AlertCustom {...alert} />
                    <input type="submit" value="Entrar" className="btn btn-primary" />                 
                 
                </Form>
              </Col>
            </Row>
        )

        
 
} 

export default Login