// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import useLanguage from '../contexts/useLanguage';
import './PredictionResults.css';

const PredictionResults = ({ uploadedImage, predictionResult }) => {
  const [index, setIndex] = useState(0);
  const { texts } = useLanguage();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="prediction-results">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src={uploadedImage} alt="Uploaded face" />
            <Card.Body>
              <Card.Title>{texts?.predictionResults?.title || 'Prediction Results'}</Card.Title>
              <Card.Text>
                <strong>{texts?.predictionResults?.skinType || 'Your skin type is'}:</strong> {predictionResult.skinType}
              </Card.Text>
              <h5>{texts?.predictionResults?.severityLevels || 'Skin Condition Severity Levels'}</h5>
              <ul>
                <li><strong>{texts?.predictionResults?.nonInflammation || 'Non-inflammation'}:</strong> {predictionResult.nonInflammation}</li>
                <li><strong>{texts?.predictionResults?.mildInflammation || 'Mild inflammation'}:</strong> {predictionResult.mildInflammation}</li>
                <li><strong>{texts?.predictionResults?.severeInflammation || 'Severe inflammation'}:</strong> {predictionResult.severeInflammation}</li>
              </ul>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src="/path-to-face-washing-image.jpg" alt="Face washing guide" />
            <Card.Body>
              <Card.Title>{texts?.skinCareAdvice?.title || 'Skincare Advice'}</Card.Title>
              <Card.Text>
                {texts?.skinCareAdvice?.faceWashing || 'Here are some tips for proper face washing:'}
              </Card.Text>
              <ul>
                <li>{texts?.skinCareAdvice?.tip1 || 'Use lukewarm water'}</li>
                <li>{texts?.skinCareAdvice?.tip2 || 'Choose a gentle cleanser'}</li>
                <li>{texts?.skinCareAdvice?.tip3 || 'Wash for about 60 seconds'}</li>
                <li>{texts?.skinCareAdvice?.tip4 || 'Pat dry with a clean towel'}</li>
              </ul>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
      <div className="navigation-buttons">
        <Button onClick={() => setIndex(index === 0 ? 1 : 0)}>
          {index === 0 ? (texts?.common?.next || 'Next') : (texts?.common?.previous || 'Previous')}
        </Button>
      </div>
    </div>
  );
};

PredictionResults.propTypes = {
  uploadedImage: PropTypes.string.isRequired,
  predictionResult: PropTypes.shape({
    skinType: PropTypes.string.isRequired,
    nonInflammation: PropTypes.string.isRequired,
    mildInflammation: PropTypes.string.isRequired,
    severeInflammation: PropTypes.string.isRequired,
  }).isRequired,
};

export default PredictionResults;