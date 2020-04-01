import React ,{Component} from "react";
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        return(
            <>
                <div className="container-fluid" id="footer">
                    <div className="row">
                        <div className="col-md-3  col-sm-3 col-xs-4">
                            <p><img src="fbrand.png" style={{backgroundColor:"white",maxWidth:"10vw",padding:"1vw",width:"100%",height:"auto"}}></img></p>
                            <p>
                                <img src="insta.png" className="myicons"></img>
                                <img src="fb.png" className="myicons"></img>
                                <img src="twitter.png" className="myicons"></img>
                                <img src="linkdin.png" className="myicons"></img>

                            </p>
                            <p className="footerStuff"><Link  >Frequently Asked Questions</Link></p>
                            <p className="footerStuff"><Link >Terms & Conditions</Link></p>
                            <p className="footerStuff"><Link >Contact Us</Link></p>
                        
                                <img className="myicons" style={{margin:0}} src="copyright.png"></img>
                            <span style={{fontSize:"0.8vw",color:"black",fontWeight:"bold"}}>  All Rights Reserved. iOGGLY MEDIA PVT LTD.</span>
                        </div>
                        <div className="col-md-6 col-sm-6  col-xs-4">
                            <img src="map.jpg" style={{
                                maxWidth:"40vw",
                                width:"100%",
                                height:"100%",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                flexDirection:"column"}}></img>
                        </div>
                        <div className="col-md-3 col-sm-3  col-xs-4" style={{fontWeight:"bold",fontSize:"1vw",color:"black",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                            <p>SUPPORT | STORE LOCATOR | COMPANY</p>
                            <p>INVESTOR RELATION | PRIVACY POLICY |</p>
                            <p>CONTACT US | BLOG</p>
                            <p>
                                <img src="phone.png" className="myicons"></img>
                                <span style={{fontSize:"1.5vw"}}>0120-4458254</span>
                                <br/>Subscribe to the iOGGLY Media, our <br/>monthly creative digest.
                                <br/><br/><input type="email" placeholder="Your Email" style={{width:"100%",
                                height:"auto",
                                padding:"0.4vw",
                                border:"none"}} ></input>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Footer;