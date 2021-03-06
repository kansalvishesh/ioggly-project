import React , {Component} from "react";

class Digital extends Component{
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
                        <h1 className="servicesHeader">DIGITAL AND SOCIAL-MEDIA</h1>
                        <p>SEO</p>
                        <p style={{fontWeight:"bold"}}>Social Media Marketing</p>
                        <p>Google Adwards</p>
                        <p style={{fontWeight:"bold"}}>Lead Generation</p>
                        <p>E-mail marketing</p>
                        <p style={{fontWeight:"bold"}}>Paid Media</p>
                    </div>
                    <div className="col-md-8">
                        <img className="servicesStuff" src="digital.jpg"/>
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
export default Digital;