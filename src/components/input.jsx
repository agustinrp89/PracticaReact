import React from "react"
import Form from 'react-bootstrap/Form';

function Input (props){
    const{label,type,name,register} = props
    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type || "text"} name={name} {...register}></Form.Control>
        </div>
    )
}

export default Input