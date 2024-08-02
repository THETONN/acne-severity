// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faVial } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
// import logoAIE from '../../assets/LOGO-AIE.png';
// import logoMFU from '../../assets/logo_mfu_3d_colour.png';
import './Navigation.css';

const routes = [
  { name: "Home", href: "home", icon: faHome },
  { name: "About", href: "about", icon: faInfoCircle },
  { name: "Demo", href: "demo", icon: faVial }
];

const Navigation = () => {
  return (
    <Navbar expand="lg" className="ezy__nav1_3wqhm31s sticky-top" bg="light">
      <Container>
        {/* <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={logoAIE} alt="AIE Logo" className="nav-logo me-2" />
          <img src={logoMFU} alt="MFU Logo" className="nav-logo" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {routes.map((route, index) => (
              <Nav.Item key={index}>
                <Link 
                  to={route.href} 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500} 
                  className="nav-link"
                >
                  <FontAwesomeIcon icon={route.icon} className="me-2" />
                  {route.name}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
          <LanguageSelector />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;