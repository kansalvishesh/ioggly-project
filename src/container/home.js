import React , {Component} from "react";
import CustomNavbar from "../component/navbar";
import {Button} from "react-bootstrap";
import Gallery from "../component/slide";
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import ToggleBox from "../toggle";
import Ads from "../services/ads";
import Traditional from "../services/traditional";
import NonTraditional from "../services/non-trad";
import Digital from "../services/digital";
import Tech from "../services/tech";
import Branding from "../services/branding";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = [
            
        ]
    }
    
    render(){
        console.log(this.props)
        return(
            <>
            
            
            <div className="container-fluid">
                <CustomNavbar />
                
                <div className="home">
                
                <h1  style={{color:"#F48633",fontWeight:"bold",fontSize:"4vw"}}>WE DO ALL.</h1>
                <p></p>
                <Link to="/contact"><Button variant="light" style={{
                    color:"#F48633",
                    fontFamily:"Ubuntu, sans-serif",
                    fontSize:"1vw",
                    backgroundColor:"white",
                    borderRadius:0,
                    boxShadow:"2px 3px #ccc",

                    }}>GET IN TOUCH
                </Button></Link><br/>
                <img style={{  width: "100%",height: "auto"}} src="home.jpg"></img>
                <p>
                <ToggleBox title="AD Campaigns">
                        <Ads/>
                </ToggleBox>
                <ToggleBox title="Traditional">
                        <Traditional/>
                </ToggleBox>
                <ToggleBox title="Non-Traditional">
                        <NonTraditional/>
                </ToggleBox>
                <ToggleBox title="Digital">
                        <Digital/>
                </ToggleBox>
                <ToggleBox title="Branding">
                        <Branding/>
                </ToggleBox>
                <ToggleBox title="Technology">
                        <Tech/>
                </ToggleBox>
                   
                </p>
                <p style={{fontSize:"1.25vw"}}>SEO | <span className="spans">Social Media Marketing</span> | Google Adwards | <span className="spans">Lead Generation</span> | Email Marketing | <span className="spans">Paid Media</span></p>
            
                    <div className="container-fluid" style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        flexDirection:"column",
                        paddingLeft:"7vw",
                        paddingTop:"5vh",
                        paddingBottom:"5vh",
                        backgroundColor:"#F8F8F8",
                        boxShadow:"2px 2px 2px#ccc",
                        width:"100%",height:"auto"}}>
                    <Gallery/>
                    </div>
                <br/>
                <Link style={{textDecoration:"none"}}><h3 style={{color:"#F48633",fontWeight:"bold"}} >Try it now >></h3></Link>
                <img style={{width:"100%",height:"auto"}} src="focus.jpg"></img>
                
                <Footer/>
                </div>
            </div>
            </>
        )
    }
}
export default Home;