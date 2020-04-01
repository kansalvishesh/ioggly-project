import React , {Component} from "react";

class NonTraditional extends Component{
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
                        <h1 className="servicesHeader">NON-TRADITIONAL</h1>
                        <p>Mall Media</p>
                        <p style={{fontWeight:"bold"}}>Transit Media<br/>(Bus,Cab,Auto,Metro,Railway) </p>
                        <p>Airports / Airlines</p>
                        <p style={{fontWeight:"bold"}}>Office / Commercial</p>
                        <p>Newspaper Inserts</p>
                        <p style={{fontWeight:"bold"}}>Catering</p>
                    </div>
                    <div className="col-md-8">
                        <img className="servicesStuff" src="non-trad.jpg"/>
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
export default NonTraditional;