// src/components/NavMenu/NavMenu.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import './Navigation.css';

const NavMenu = ({ routes }) => (
  <Nav className="ms-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
    {routes.map((route, i) => (
      <Nav.Item key={i}>
        <Link to={route.href} smooth={true} duration={500} className="nav-link">
          <FontAwesomeIcon icon={route.icon} className="me-2" />
          {route.name}
        </Link>
      </Nav.Item>
    ))}
  </Nav>
);

NavMenu.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default NavMenu;
