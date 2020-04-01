import React , {Component} from "react";

class Ads extends Component{
    render(){
        return(
            <>
                <div className="container-fluid row">
                    <div className="col-md-4 container" style={{
                    display:"flex",
                    alignItems: "left",
                    alignSelf:"center",
                    flexDirection: "column"
                }}>
                    <img src="bullhorn.png" style={{
                        maxWidth:"6vw",
                        
                    }} />
                        <h1 className="servicesHeader">AD CAMPAIGN</h1>
                        <p>Logo Design</p>
                        <p style={{fontWeight:"bold"}}>Brand Identity Design</p>
                        <p>Colletrals</p>
                        <p style={{fontWeight:"bold"}}>Packaging Design</p>
                        <p>Stationary</p>
                        <p style={{fontWeight:"bold"}}>Corporate (in & out)</p>
                    </div>
                    <div className="col-md-8">
                        <img className="servicesStuff" src="branding.jpg"/>
                        <p style={{textAlign:"center"}}>
                            We are best suited towards companies who are trying to reach a local audience. A strategic
                            direct mail campaign for a local restaurant or a billboard promoting the opening day of a museum
                            can be an effective use of traditional forms of media
                        </p>
                    </div>
                </div>
          
            </>
        )
    }
}
export default Ads;