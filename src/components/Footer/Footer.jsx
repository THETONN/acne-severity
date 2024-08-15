// import React from 'react';
import './Footer.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logoAIE from '../../assets/LOGO-AIE.webp';
import logoMFU from '../../assets/logo_mfu_3d_colour.webp';
import logoSHS from '../../assets/shs.webp';
import useLanguage from '../contexts/useLanguage';

const Copyright = () => {
  const { texts } = useLanguage();

    return (
        <footer className="ezy__copyright3 text-center pt-5 pb-4">
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col xs={12} className="text-center">
                        {/* <h5 className="sponsor-title mb-3">ผู้สนับสนุน</h5> */}
                        <Image src={logoAIE} alt="AIE Logo" className="footer-logo me-4" />
                        <Image src={logoMFU} alt="MFU Logo" className="footer-logo me-4" />
                        <Image src={logoSHS} alt="MFU Logo" className="footer-logo" />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    {/* <Col lg={6} className="text-lg-start mb-3 mb-lg-0">
                        <p className="mb-0">พัฒนาโดย: ศูนย์วิจัยปัญญาประดิษฐ์และเทคโนโลยีก้าวหน้า</p>
                        <p className="mb-0">สำนักวิชาเทคโนโลยีสารสนเทศ มหาวิทยาลัยแม่ฟ้าหลวง</p>
                    </Col> */}
                    <Col lg={12} className="text-lg-end">
                        <p className="mb-0">{texts.footer.cc}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Copyright;