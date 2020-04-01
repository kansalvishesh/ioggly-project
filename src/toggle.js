import React, { Component } from "react";
import { Button } from "react-bootstrap";

class ToggleBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}
  
	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		var { title, children } = this.props;
		const { opened } = this.state;

		

		return (
            <>
               <Button variant="light" className="mybtns" onClick={this.toggleBox} >{title}</Button>
               {
                   opened && (
                       <div className="boxContent">
                           {children}
                       </div>
                   )
               }
            
            </>
            
            // <div className="box">
			// 	<div className="boxTitle" onClick={this.toggleBox}>
			// 		{title}
			// 	</div>
			// 	{opened && (					
			// 		<div class="boxContent">
			// 			{children}
			// 		</div>
			// 	)}
			// </div>
		);
	}
}

export default ToggleBox;