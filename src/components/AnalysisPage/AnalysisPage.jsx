import { useState } from 'react';
import ImageUploader from '../ImageLoader/ImageLoader';
import PredictionResults from '../PredictionResults/PredictionResults';
import AILoadingAnimation from '../animation/AILoadingAnimation';
import '../ImageLoader/ImageLoader.css';
import './AnalysisPage.css';
import useLanguage from '../contexts/useLanguage';
import { Button } from 'react-bootstrap';

const AnalysisPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [showUploader, setShowUploader] = useState(true);
  const { texts } = useLanguage();

  const handleImageUpload = (image) => {
    setUploadedImage(image);
    setPredictionResult(null);
  };

  const handleReset = () => {
    setUploadedImage(null);
    setPredictionResult(null);
    setShowUploader(true);
  };

  const handlePredict = () => {
    setIsPredicting(true);
    setShowUploader(false);
    // Simulated API call or model prediction
    setTimeout(() => {
      setPredictionResult({
        skinType: "Non-inflammation",
        nonInflammation: "Almost clear; rare non-inflammatory lesions with no more than one small inflammatory lesion.",
        mildInflammation: "Some non-inflammatory lesions with no more than a few inflammatory lesions (papules/pustules only, no nodular lesions).",
        severeInflammation: "Too many non-inflammatory lesions and may have some inflammatory lesions, but no more than a few nodular lesions."
      });
      setIsPredicting(false);
    }, 3500);
  };

  return (
    <div className="analysis-page">
      <h1>{texts?.analysisPage?.title || 'วิเคราะห์สภาพผิว'}</h1>
      <div className="content-wrapper">
        {showUploader && (
          <div className="upload-section">
            <ImageUploader onImageUpload={handleImageUpload} onReset={handleReset} />
            {uploadedImage && (
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
        {predictionResult && (
          <div className="results-section">
            <PredictionResults 
              uploadedImage={uploadedImage} 
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