import {Container,Card,Button} from "react-bootstrap"
import "../Component/Ourproject.css"
export const OurProj=()=>{
    return(
<Container   className='project' >
<div className="text-center">
    <h3 className=""  style={{top:"100"}}  >Our Projects</h3>
    <p>Lorem ipsum dolor sit amet, consectetur <br /> ut illum soluta to Adipisci saepe</p>
    </div>
<br /><br />
    <div className=" ourproject-main  ">
<Card className="ourproject-card" style={{ height:"38.8rem", width:"20rem"}}> 
<Card.Img className="p-3" variant="top" src="src\assets\project-1.jpg"    />
    <Card.Body>
    <div className="d-flex flex-column justify-content-center">
    <h4 className="fw-bold text-center  ">Building Make</h4>
    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, atque laborum. Ipsam rem vero earum labore voluptas</p>
    <Button style={{}} className="ourproject_btn  btn btn-warning ">Learn More</Button>
    </div>
</Card.Body>

</Card>
<Card className="ourproject-card" style={{ height:"38.8rem", width:"20rem"}}> 
<Card.Img className="p-3" variant="top" src="src\assets\project-2.jpg"    />
<Card.Body>
    <div className="d-flex flex-column justify-content-center">
    <h4 className="fw-bold text-center  ">Building Make</h4>
    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, atque laborum. Ipsam rem vero earum labore voluptas </p>
    <Button style={{}} className="ourproject_btn btn btn-warning ">Learn More</Button>
    </div>
</Card.Body>

</Card>
<Card className="ourproject-card " style={{ height:"38.8rem", width:"20rem"}}>
<Card.Img variant="top" className="p-3" src="src\assets\project-3.jpg"    />
<Card.Body>
    <div className="d-flex flex-column justify-content-center">
    <h4 className="fw-bold text-center  ">Building Make</h4>
    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, atque laborum. Ipsam rem vero earum labore voluptas </p>
    <Button style={{}} className="ourproject_btn btn btn-warning ">Learn More</Button>
    </div>
</Card.Body>
</Card>
</div>
<br />
 <br />
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