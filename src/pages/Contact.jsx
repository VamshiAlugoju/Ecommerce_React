import React from 'react'
import ContactNav from '../components/Navbar/ContavtNav'
import {Form ,Button,Container} from "react-bootstrap"
import axios from "axios";

function Contact() {

    const name = React.useRef();
    const mail = React.useRef();
    const number = React.useRef();
    const [loading,setloading] = React.useState(false)

    async function handleSubmit(e)
    {  
        e.preventDefault();
        setloading(true);
        try
        {
          const obj = {
            Name:name.current.value,
            Mail:mail.current.value,
            Number:number.current.value
          }
          let a =await axios.post("https://ecommece-4587f-default-rtdb.firebaseio.com/Users.json",{obj:obj})
          console.log(a);
  
          console.log(a)
        }
        catch(err){
          console.log(err)
        }
        setloading(false);
    }
  return (
     <>
     <ContactNav />
     <Container className='d-flex justify-content-center py-5'>
     <Form noValidate className='fs-2' onSubmit={handleSubmit}>
      
        <Form.Group   controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
           type="text"
            placeholder="Name"
            ref = {name}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group  controlId="validationCustom02">
          <Form.Label>Mail</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="xyz@gmail.com"
            ref={mail}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group     controlId="validationCustom02">
          <Form.Label>Number</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="1234567891"
            ref={number}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
     
      <Button type="submit"> {loading ? <img src="/loadergif.gif" width={25} alt="" /> : "Submit form" } </Button>
      
    </Form>
    </Container>
     </>
  )
}

export default Contact
