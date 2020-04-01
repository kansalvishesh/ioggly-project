import React , {Component} from "react";
import { Container,Nav, Navbar,Form} from "react-bootstrap";
import {Link} from "react-router-dom";

class CustomNavbar extends Component{
    constructor(props){
        super(props)
        this.state={
            color:"black"
        };
    }
    handleClick=()=>{
        
        this.setState({
            color:"#F48633"
        })
    }
    render(){
        
        
        return(
            <>
            <Navbar className="mynavbar" sticky="top" expand="lg">
                

                <div className="container-fluid">
                <Navbar.Brand href="/">
                <img
                    src="brand.png"
                    style={{  width: "100%",height: "auto"}}
                    className="d-inline-block align-top"
                    
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto navs">
                    <Link to="/" className="navs" activeClassName="navActive" onClick={this.handleClick} style={{color:this.state.color}} >HOME</Link>
                    <Link to="/about" className="navs" activeClassName="navActive">ABOUT US</Link>
                    <Link to="/services" className="navs" activeClassName="navActive">SERVICES</Link>
                    <Link to="/campaigns" className="navs" activeClassName="navActive">CAMPAIGNS</Link>
                    <Link to="/team" className="navs" activeClassName="navActive">TEAM</Link>
                    <Link to="/clients" className="navs" activeClassName="navActive">CLIENTS</Link>
                    <Link to="/contact" className="navs" activeClassName="navActive">CONTACT US</Link>
                    </Nav>
                    <Form inline>
                        
                    </Form>
                </Navbar.Collapse>
                </div>
            </Navbar>
        
            </>
        )
    }
}
export default CustomNavbar;