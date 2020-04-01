import React , {Component } from "react";
import MyTeam from "../teams/myteam";
import CustomNavbar from "../component/navbar";
import { Row,Col,Image } from "react-bootstrap";
import Footer from "../component/footer";
class Team extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <div className="container-fluid">
                    <CustomNavbar/>
                    <div className="container" style={{display:"flex",
                alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                        <h1 style={{color:"#F48633"}}>Meet Our Team</h1>
                        <h3>Every hand is a different set of skill</h3>
                        <Row>
                            {
                                MyTeam.Members.map((members)=>{
                                    return(
                                        <>
                                        <Col xs={6} md={4} className="team">
                                            <div className="team img-hover-zoom">
                                            <Image src={members.image} thumbnail/>
                                            </div>
                                            
                                            <h2>{members.name}</h2>
                                                <h3>{members.title} </h3>
                                        </Col>
                                        
                                        </>
                                    )
                                })
                            }
                        </Row>
                       
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
}
export default Team;