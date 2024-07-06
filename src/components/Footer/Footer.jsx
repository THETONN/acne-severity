import './Footer.css';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
    {
        icon: faFacebook,
        href: "",
    },
    {
        icon: faTwitter,
        href: "",
    },
    {
        icon: faDribbble,
        href: "",
    },
    {
        icon: faBehance,
        href: "",
    },
];

const SocialLinks = () => (
    <Nav className="ezy__copyright3-social">
        {socialLinks.map((link, i) => (
            <li key={i}>
                <a href={link.href} className="">
                    <FontAwesomeIcon icon={link.icon} />
                </a>
            </li>
        ))}
    </Nav>
);

const Copyright = () => {
    return (
        <section className="ezy__copyright3 text-center text-lg-start pt-5 pb-5">
            <Container>
                <Row className="d-flex justify-content-between align-items-center">
                    <Col lg={4}>
                        <p className="mb-lg-0">Copyright all rights reserved</p>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center justify-content-lg-end">
                        <SocialLinks />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Copyright;
