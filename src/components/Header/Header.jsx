// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import useLanguage from '../contexts/useLanguage';
import './Header.css';
import aiskin from '../../assets/AIskin.jpg'

const CallHeader = () => {
  const { texts, language } = useLanguage();

  return (
    <section className="ezy__cta16">
      <Container fluid className="position-relative p-0">
        <Row className="g-0">
          <Col xs={12} md={6} className="ezy__cta16-content">
            <motion.div 
              className="ezy__cta16-wrapper"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="ezy__cta16-heading mb-4">
                {language === 'th' ? (
                  <>
                    ลองใช้ <span className="ezy__cta16-theme-color">AI วิเคราะห์ผิวหนัง</span> ของเรา
                  </>
                ) : (
                  <>
                    Try our <span className="ezy__cta16-theme-color">AI Skin Analysis</span>
                  </>
                )}
              </h1>
              <p className="ezy__cta16-sub-heading">
                {language === 'th' ? 'เพื่อค้นหาปัญหาผิวของคุณ' : 'To find your skin problems'}
              </p>
              <div className="mt-4">
                <Button variant="primary" className="ezy__cta16-btn" href="#upload-section">
                  {language === 'th' ? 'ทดลองใช้ฟรี' : 'Try for Free'}
                </Button>
              </div>
              <div className="ezy__cta16-features mt-5">
                <Row>
                  {['accuracy', 'fast', 'easy'].map((feature, index) => (
                    <Col key={index} xs={4}>
                      <motion.div 
                        className="feature-item"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className={`fas fa-${feature === 'accuracy' ? 'bullseye' : feature === 'fast' ? 'bolt' : 'magic'}`}></i>
                        <p>{texts.uploader[feature]}</p>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </div>
            </motion.div>
          </Col>
          <Col xs={12} md={6} className="ezy__cta16-image">
            <motion.div 
              className="image-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={aiskin} alt="AI Skin Analysis" className="img-fluid" />
              <div className="ai-analysis-overlay"></div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallHeader;
