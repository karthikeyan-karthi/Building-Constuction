import { Container, Button } from "react-bootstrap";
import "../Component/Body2.css"

export const Body2 = () => {
  return (
    <div className="mt-2">
      <Container className=" ">
            
               <div className="" style={{ top: "100px" }}>
          <div >
            <div className="body-img">
                <div className="body2img">
              <img
                className="d-block"
                style={{ paddingTop: "10rem", height: "40rem", width: "25rem" }}
                src="src\assets\about.jpg"
                alt=""
              />
            </div>

            <div className="Body2content" style={{ paddingLeft: "7rem" }}>
              <h2 style={{ paddingTop: "12rem" }}>
                We Provide the Best Quality <br />
                <span>Service Ever</span>{" "}
              </h2>
              <p className="" style={{}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione officiis temporibus a voluptate. Consequuntur
                laudantium, ab a consequatur eius placeat nulla hic. Eligendi
                quos eveniet voluptatibus quas vel repellendus impedit!
              </p>
              <Button className="btn btn-warning " style={{}}>
                Learn more
              </Button>
              </div>
              </div>

            </div>
          </div>
        
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
