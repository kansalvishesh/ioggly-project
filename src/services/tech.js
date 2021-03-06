import React , {Component} from "react";

class Tech extends Component{
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
                        <h1 className="servicesHeader">TECHNOLOGY</h1>
                        <p>Web Design & Development</p>
                        <p style={{fontWeight:"bold"}}>Mobile App Development</p>
                        <p>Web Hosting</p>
                    </div>
                    <div className="col-md-8">
                        <img className="servicesStuff" src="tech.jpg"/>
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
export default Tech;