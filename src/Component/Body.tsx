import React from "react";
import { Container,Carousel, CarouselItem,Button } from "react-bootstrap";

export const  Carousbody=()=>{
    return(          
<Carousel  >
<Carousel.Item >
<img className="opacity-rgba(0,0,0,0.7)" style={{ width:"100%",height:"700px",}} src="src\assets\2.jpg" alt="" />
        <Carousel.Caption  style={{bottom:"230px"}}>
   <h1>YOUR DREAM HOUSE </h1>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae eaque aliquam eveniet voluptates, provident laborum iure pariatur vero unde, iusto totam quas voluptas, ratione expedita excepturi voluptatem repellendus tempore vitae</p>
   <Button className="btn btn-warning">Learn more</Button>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img style={{ width:"100%",height:"700px",}} src="src\assets\dsBuffer.png" alt="" />
<Carousel.Caption className="mask" style={{   bottom:"230px"}}>
   <h1>ALWAYS DEDICATED </h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptates dolore eaque ab quo accusantium, incidunt est odit consectetur nostrum veniam quisquam fuga laborum nobis, qui obcaecati amet ipsam exercitationem</p>
   <Button className="btn btn-warning">Learn more</Button>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item >
<img  style={{ width:"100%",height:"700px",}} src="src\assets\home1.jpg" alt="" />
<Carousel.Caption className="mask" style={{  bottom:"230px"}}>
   <h1>TRUE CONSTRUCTION</h1>
   <p className="d-block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut pariatur, facere magnam facilis sequi enim eligendi tempora error reprehenderit aut nostrum atque velit reiciendis dolor quae eius maxime asperiores laborum</p>
   <Button className="btn btn-warning ">Learn more</Button>
</Carousel.Caption>
</Carousel.Item>
</Carousel>

  )
}