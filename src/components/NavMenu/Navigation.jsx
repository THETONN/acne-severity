// src/components/NavMenu/Navigation.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import NavMenu from './NavMenu';
import { faHome, faInfoCircle, faVial } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import logoAIE from '../../assets/LOGO-AIE.png'; 
import logoMFU from '../../assets/logo_mfu_3d_colour.png';

const routes = [
  { name: "Home", href: "home", icon: faHome },
  { name: "About", href: "about", icon: faInfoCircle },
  { name: "Demo", href: "demo", icon: faVial }
];

const Navigation = () => {
  return (
    <div className="ezy__nav1_3wqhm31s sticky-top">
      <Navbar expand="lg" className="py-3">
        <Container>
          {/* <Navbar.Brand href="#">Easy Frontend</Navbar.Brand> */}
          <Navbar.Brand href="#">
            <img src={logoAIE} alt="Logo1" className="me-2" style={{ height: '40px' }} />
            <img src={logoMFU} alt="Logo2" className="me-2" style={{ height: '40px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="ezy__nav1_3wqhm31s-navbar-nav">
            <span>
              <span />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="ezy__nav1_3wqhm31s-navbar-nav">
            <NavMenu routes={routes} />
            <LanguageSelector />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
