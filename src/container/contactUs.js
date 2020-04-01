import React , {Component} from "react";
import CustomNavbar from "../component/navbar";
import {Button,Card} from "react-bootstrap";
import Footer from "../component/footer";

class ContactUs extends Component{
    render(){
        return(
            <>
                <div className="container-fluid" >
                    <CustomNavbar/>
                    <div className="container-fluid row" style={{
                        display:"flex",
                        alignItems:"center"
                    }}>
                            
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <h2  style={{
                                fontFamily: 'Raleway ,sans-serif',
                                                       
                                color:"#1A5F8A",
                                }}>We would love to hear from you!</h2>
                            <p style={{color:"#535353",
                               }}>Whether you have a question about features, pricing, demo<br/>
                                or anything else, our team is ready to answer your questions.
                            </p>
                            <h4 style={{color:"#F48633",fontWeight:"bold" }}>Get in touch with us</h4>
                        
                        <div className="row">
                            <div className="col-md-6 ">
                            <input type="text" className="inputs" placeholder="FIRST NAME"></input>
                            </div>
                            <div className="col-md-6">
                            <input type="text" className="inputs" placeholder="LAST NAME"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <input type="text" className="inputs" placeholder="EMAIL" style={{display:"flex",flex:1}}></input>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-6 ">
                            <input type="tel" className="inputs" placeholder="MOBILE NO."></input>
                            </div>
                            <div className="col-md-6">
                            <form>
                            <select className="inputs"  style={{backgroundColor:"white"}}>
                            <option value=""disabled selected>TYPE OF QUERY</option>
                            <option style={{color:"#F48633"}}>AD CAMPAIGNS</option>
                            <option style={{color:"#F48633"}}>TRADITIONAL</option>
                            <option style={{color:"#F48633"}}>NON TRADITIONAL</option>
                            <option style={{color:"#F48633"}}>DIGITAL</option>
                            <option style={{color:"#F48633"}}>BRANDING</option>
                            <option style={{color:"#F48633"}}>TECHNOLOGY</option>
                            </select>
                            </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <input type="text" className="inputs" placeholder="YOUR MESSAGE" style={{display:"flex",flex:1}}></input>
                            </div>
                        </div>
                        <div >
                        <Button style={{
                            backgroundColor:"#F48633",
                            color:"black",
                            paddingLeft:"2vw",
                            paddingRight:"2vw",
                            border:"none",
                            borderRadius:0,
                            margin:"0.5vw",
                            fontSize:"1.5vw",
                            fontWeight:"100"
                            }} >SUBMIT</Button>

                        </div>
                        
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12" style={{
                             
                            
                            width:"100%",
                            height:"auto",
                            
                        }}>
                        <Card id="card">
                            <Card.Img src="building.jpg" alt="Card image" id="building"/>
                            <Card.ImgOverlay>
                                
                                <div className="container" style={{
                                    boxShadow:"1px 1px 1px 1px#ccc",
                                    borderRadius:20,
                                    backgroundColor:"white",maxWidth:"fit-content",
                                    padding:"1vw",
                                   }}>
                                <p>
                                <img src="pin.png" className="contactIcons"/>
                                iOGGLY Media (P) Ltd,B-53, <br/><span style={{marginLeft:"2.1vw"}}>Sector-63,Noida, U.P.-201301</span>
                                </p>
                                <p>
                                    <img src="phone.png" className="contactIcons"/>
                                    0120 4251581
                                    
                                </p>
                                <p>
                                    <img src="envelope.png" className="contactIcons"/>
                                    info@iogglymedia.com<br/><span style={{marginLeft:"2.1vw"}}>sales@iogglymedia.com</span>
                                    
                                </p>
                                <div>

                                </div>
                                
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                            
                            
                        </div>
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
}
export default ContactUs;