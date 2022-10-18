import {Container,Navbar,Nav,Button} from "react-bootstrap"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import {NavLink} from "react-router-dom"


export const Headernav=()=>{
    return(
     <Navbar className="bg-light  shadow-md mb-1 fixed-top"  expand="lg">
     <Container>
        <Nav.Link to='/' as={NavLink}>
        <h4 className="fw-bold text-warning">BUILD<span className="text-dark fw-bold">CON</span></h4>
        </Nav.Link>
        <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
 <Nav className="fw-bold ms-auto " >
    <Nav.Link  to='/' as={NavLink}>Home</Nav.Link>
    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
    <Nav.Link to='/service' as={NavLink}>Service</Nav.Link>
    <Nav.Link to='/team' as={NavLink}>Team</Nav.Link>
    <Nav.Link to='/Contact' as={NavLink}>Contact</Nav.Link>
 </Nav>
 </Navbar.Collapse>
     </Container>
     </Navbar>



    )
}