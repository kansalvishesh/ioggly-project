import React , {Component } from "react";
import CustomNavbar from "../component/navbar";
import Traditional from "../serices/traditional";
import NonTraditional from "../serices/non-trad";
import Digital from "../serices/digital";
import Footer from "../component/footer";
import Branding from "../serices/branding";
import Tech from "../serices/tech";
import Ads from "../serices/ads";

class Services extends Component{
    render(){
        return(
            <>
                <div className="container-fluid">
                    <CustomNavbar/>
                    <div className="container" >
                    <Ads/>
                    </div>
                    <div className="container" >
                    <Traditional/>
                    </div>
                    <div className="container" >
                    <NonTraditional/>
                    </div>
                    <div className="container" >
                    <Digital/>
                    </div>
                    <div className="container" >
                    <Branding/>
                    </div>
                    <div className="container" >
                    <Tech/>
                    </div>
                    
                    
                    <Footer/>
                </div>
            </>
        )
    }
}
export default Services;