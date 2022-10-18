import {Container,Form,Button} from "react-bootstrap"
import "../Component/contact.css"

export const Contact=()=>{

    return(
  <Container>
     <div className="text-center">
    <h3 className=""  style={{top:"100"}}  >Contact Us</h3>
    <p>Lorem ipsum dolor sit amet, consectetur <br /> ut illum soluta to Adipisci saepe</p>
    </div>
    <br /><br />
    <br />
  
  <Form className="contact">
    <Form.Group  className="d-flex flex-column " >
   <Form.Control className="m-2"  type="text" placeholder="Full Name" />
   <Form.Control className="m-2" type="Email" placeholder="Email" />
    <Form.Control className="m-2"   as="textarea" rows={4} placeholder="Message" />
    </Form.Group>

    <Button  className="btn btn-warning ms-2 fw-bold mt-3 w-100 text-center">
   Send Now
    </Button>
  </Form>
  <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 </Container>
    )
}