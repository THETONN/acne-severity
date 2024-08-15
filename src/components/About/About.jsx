// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import imageLand1 from '../../assets/image-land-1.webp';
import imageLand2 from '../../assets/image-land-2.webp';
import useLanguage from '../contexts/useLanguage';

const StyledSection = styled.section`
  background-color: #f8f9fa;
  color: #333;
  padding: 80px 0;
`;

const StyledHeading = styled(motion.h2)`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const StyledSubHeading = styled.p`
  font-size: 1.2rem;
  color: #34495e;
  line-height: 1.6;
`;

const StyledCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const StyledImage = styled(motion.img)`
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const stories = [
  {
    titleKey: "topic1",
    descriptionKey: "detail1",
    image: imageLand2,
  },
  {
    titleKey: "topic2",
    descriptionKey: "detail2",
    image: imageLand1,
  },
];

const StoryItem = ({ item, index }) => {
  const { texts } = useLanguage();
  const { titleKey, descriptionKey, image } = item;
  
  return (
    <StyledCard
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Row className="align-items-center">
        <Col xs={12} md={6} className={index % 2 === 0 ? "order-md-2" : "order-md-1"}>
          <StyledImage
            src={image}
            alt={texts.Story[titleKey]}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Col>
        <Col xs={12} md={6} className={index % 2 === 0 ? "order-md-1" : "order-md-2"}>
          <motion.h4
            className="fw-bold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {texts.Story[titleKey]}
          </motion.h4>
          <motion.p
            className="mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {texts.Story[descriptionKey]}
          </motion.p>
        </Col>
      </Row>
    </StyledCard>
  );
};

StoryItem.propTypes = {
  item: PropTypes.shape({
    titleKey: PropTypes.string.isRequired,
    descriptionKey: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const AboutUs = () => {
  const { texts } = useLanguage();
  return (
    <StyledSection className="ezy__about6" id="ezy__about6">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col xs={12} md={8}>
            <StyledHeading
              className="fw-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {texts.Story.title}
            </StyledHeading>
            <StyledSubHeading>
              {texts.Story.detail}
            </StyledSubHeading>
          </Col>
        </Row>

        {stories.map((item, i) => (
          <StoryItem item={item} index={i} key={i} />
        ))}
      </Container>
    </StyledSection>
  );
};

export default AboutUs;