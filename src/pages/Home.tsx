import {Row,Col} from "react-bootstrap"
import {Carousbody} from '../Component/Body'
import {Body2}from "../Component/Body2"
import {Contact} from "../Component/Contact"
import {Bodycard}from "../Component/Body3"
import {OurProj} from "../Component/Ourproj"
import {Ourtea} from '../Component/Ourteam'
import {New} from "../Component/new"
export const Home=()=>{
    return(
       <>   
    
   <Carousbody/>
    <Body2/>
   <Bodycard/>

    <OurProj/>
    <Ourtea/>

    <Contact/>
   
  
    </>

        

    )
}