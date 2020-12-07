import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
	BrowserRouter as 
	Link
} from "react-router-dom";
import logo from "../logo-aiforrural2.png";





const NavBar = () => {
	return (
		<div className="App">
			<ReactBootStrap.Navbar collapseOnSelect expand="xl"  variant="dark" style={{ color: 'black', background: "white" }}>
				<ReactBootStrap.Navbar.Brand href="#home">
					<img src={logo } alt ="'logo" height="40px" />
				</ReactBootStrap.Navbar.Brand>
				<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: 'black', background: "#C3227A"  }} />
				<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" style={{ color: 'black' }}>
					<ReactBootStrap.Nav>
						<Link to="/deets">
							<ReactBootStrap.Nav.Link href="#deets" style={{ color: 'black' , fontSize: "14px"}}>Explore Events</ReactBootStrap.Nav.Link>
						</Link>
						<Link to="/dankmemes">
							<ReactBootStrap.Nav.Link eventKey={2} href="#memes" style={{ color: 'black', fontSize: "14px"}}>
								Create Events
      </ReactBootStrap.Nav.Link>
						</Link>
					</ReactBootStrap.Nav >
				</ReactBootStrap.Navbar.Collapse >
			</ReactBootStrap.Navbar>
		</div>
	)
}

export default NavBar;