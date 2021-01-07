import React from 'react'
import './Header.css';
import Typical from 'react-typical'
import Particles from 'react-particles-js';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Graph from './graph.js'
function Header() {
    return (
        <div class="head" id="topheader">
		<Navbar collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand href="#home">Sigma<span className="red_text">RED</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>

    <Nav>

      <Nav.Link className="text_link_color" href="#home">
        HOME
      </Nav.Link>
      
      <Nav.Link className="text_link_color" href="#platform">
        PLATFORM
      </Nav.Link>

      <Nav.Link className="text_link_color" href="#usecases">
       USE CASES
      </Nav.Link>

      <Nav.Link className="text_link_color" href="#about">
        ABOUT US
      </Nav.Link>

      <Nav.Link className="text_link_color" href="#contact">
        CONTACT US
      </Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>

<section class="head_text">

            <Particles 
                params={{ 
                  particles: { 
                    number: { 
                      value: 300, 
                      density: { 
                        enable: true, 
                        value_area: 1500, 
                      } 
                    }, 
                  }, 
                }} 
              />
	<div class="center_align">
		
        <Typical
                    steps={['Safer AI', 1100, 'Transform Business', 900 , 'AI Risk Asessment ', 1000 , 'AI Remediation' ,1000]}
                    loop={Infinity}
                    wrapper="p"
                    className="center_title"
                   
                />

                <h5 class="text_color_down">We enable automated risk assesments of AI systems with <br/> respect of fairness, transparency and robustness<br/> and identify and mitigate those risks</h5>
	</div>
</section>

	</div>

    
        )
}



export default Header;
