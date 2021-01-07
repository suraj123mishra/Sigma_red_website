import React from 'react'
import './Header.css';
import Typical from 'react-typical'
import Particles from 'react-particles-js';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header2.css';
function Header() {
    return (
        <div  id="topheader" class="fixed_header_privacy">
		<Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark">
  <Navbar.Brand >Sigma<span className="red_text">RED</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>

    <Nav>
    <Nav.Link>
      
      </Nav.Link>

      <Link to="/" className="text_link_color">
        BACK TO HOME
      </Link>
      
      <Nav.Link>
      
      </Nav.Link>

      {/* <Link to="/#platform" className="text_link_color">
        PLATFORM
      </Link>

      <Nav.Link>
      
      </Nav.Link>

      <Link to="/#usecases" className="text_link_color">
        USE CASES
      </Link>

      <Nav.Link>
      
      </Nav.Link>

      <Link to="/#about" className="text_link_color">
        ABOUT US
      </Link>

      <Nav.Link>
      
      </Nav.Link>

      <Link to="/#contact" className="text_link_color">
        CONTACT US
      </Link> */}

      

    </Nav>
  </Navbar.Collapse>
</Navbar>



	</div>

    
        )
}



export default Header;
