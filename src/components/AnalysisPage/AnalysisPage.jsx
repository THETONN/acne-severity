/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ImageUploader from '../ImageLoader/ImageLoader';
import PredictionResults from '../PredictionResults/PredictionResults';
import AILoadingAnimation from '../animation/AILoadingAnimation';
import '../ImageLoader/ImageLoader.css';
import './AnalysisPage.css';
import useLanguage from '../contexts/useLanguage';
import { Button, Alert } from 'react-bootstrap';

const AnalysisPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [showUploader, setShowUploader] = useState(true);
  const [error, setError] = useState('');
  const [isFaceDetected, setIsFaceDetected] = useState(false);
  const { texts } = useLanguage();

  const handleImageUpload = (image, preview) => {
    setUploadedImage(image);
    setImagePreview(preview);
    setPredictionResult(null);
    setError('');
    setIsFaceDetected(true);
  };

  const handleReset = () => {
    setUploadedImage(null);
    setImagePreview(null);
    setPredictionResult(null);
    setShowUploader(true);
    setError('');
    setIsFaceDetected(false);
  };

  const handlePredict = () => {
    setIsPredicting(true);
    setShowUploader(false);

    const formData = new FormData();
    formData.append('image', uploadedImage);

    fetch('https://predictacne-jc3i5ycouq-et.a.run.app/predict', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setPredictionResult(data.prediction);
        setIsPredicting(false);
      })
      .catch((error) => {
        setError("An error occurred during prediction. Please try again.");
        setIsPredicting(false);
        setShowUploader(true);
      });
  };

  return (
    <div className="analysis-page">
      <h1>{texts?.analysisPage?.title || 'วิเคราะห์สภาพผิว'}</h1>
      <div className="content-wrapper">
        {showUploader && (
          <div className="upload-section">
            <ImageUploader onImageUpload={handleImageUpload} onReset={handleReset} />
            {isFaceDetected && (
              <div className="button-group mt-3">
                <Button 
                  className="predict-button" 
                  onClick={handlePredict}
                  disabled={isPredicting}
                >
                  {isPredicting ? texts?.common?.predicting || 'กำลังทำนาย...' : texts?.common?.predict || 'ทำนาย'}
                </Button>
                <Button 
                  className="cancel-button" 
                  variant="secondary"
                  onClick={handleReset}
                >
                  {texts?.common?.cancel || 'ยกเลิก'}
                </Button>
              </div>
            )}
          </div>
        )}
        {isPredicting && <AILoadingAnimation />}
        {error && (
          <Alert variant="danger" onClose={() => setError('')} dismissible>
            {error}
          </Alert>
        )}
        {predictionResult !== null && (
          <div className="results-section">
            <PredictionResults 
              uploadedImage={imagePreview} 
              predictionResult={predictionResult} 
            />
            <Button 
              className="upload-new-button mt-3" 
              onClick={handleReset}
            >
              {texts?.common?.uploadNew || 'อัปโหลดรูปใหม่'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisPage;