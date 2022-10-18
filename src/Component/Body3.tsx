import { Container, Card, Button, Row, Col } from "react-bootstrap"
import "../Component/Body3.css"
export const Bodycard = () => {
    return (
        <Container >
            
            <div className="text-center">
                <h3 className="" style={{ top: "100" }}  >Our Service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> ut illum soluta to Adipisci saepe</p>
            </div>
            <br /><br />
            
                <div className=" body-3_main d-flex  justify-content-around">
                    <Card className=" card-1  bg-dark text-light" style={{ height: "20rem", width: "20rem" }}>
                        <Card.Body>
                        
                                <svg  style={{}} xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" className=" card-1_svg" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                </svg>
                                <h4 className="fw-bold text-center  ">Best Quality</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, atque laborum. Ipsam rem vero earum labore voluptas ut cupiditate consequuntur fuga? Labore iste consequuntur velit, maxime nihil dolore ipsam explicabo.</p>
                                <Button style={{  }} className="card-1_btn    btn btn-warning ">Learn more</Button>
                        
                        </Card.Body>
                    </Card>
                
                    <Card className="card-1 bg-dark text-light" style={{ height: "20rem", width: "20rem" }}>
                        <Card.Body>
                         
                                <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" className=" card-1_svg" viewBox="0 0 16 16">
                                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                </svg>
                                <h4 className="fw-bold text-center  ">Sustainablility</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, atque laborum. Ipsam rem vero earum labore voluptas ut cupiditate consequuntur fuga? Labore iste consequuntur velit, maxime nihil dolore ipsam explicabo.</p>
                                <Button  className="card-1_btn btn btn-warning ">Learn more</Button>
                    
                        </Card.Body>

                    </Card>
            
            
                                    <Card className="card-1 bg-dark text-light" style={{ height: "20rem", width: "20rem" }}>
                        <Card.Body>
                           
                                <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" className="card-1_svg" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5zm6-8V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2V6a2 2 0 0 1 2-2h5z" />
                                </svg>
                                <h4 className="fw-bold text-center  ">Integrity</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, atque laborum. Ipsam rem vero earum labore voluptas ut cupiditate consequuntur fuga? Labore iste consequuntur velit, maxime nihil dolore ipsam explicabo.</p>
                                <Button  className="card-1_btn btn btn-warning ">Learn more</Button>
                          
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