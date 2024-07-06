// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PredictionResults from '../PredictionResults/PredictionResults';
import './Results.css';

const AnalysisPage1 = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handlePrediction = () => {
    // สมมติว่านี่คือการเรียก API หรือโมเดลเพื่อทำนาย
    // ในสถานการณ์จริง คุณจะต้องเชื่อมต่อกับ backend หรือ ML model
    setPredictionResult({
      skinType: "Non-inflammation",
      nonInflammation: "Almost clear; rare non-inflammatory lesions with no more than one small inflammatory lesion.",
      mildInflammation: "Some non-inflammatory lesions with no more than a few inflammatory lesions (papules/pustules only, no nodular lesions).",
      severeInflammation: "Too many non-inflammatory lesions and may have some inflammatory lesions, but no more than a few nodular lesions."
    });
  };

  return (
    <div className="analysis-page">
      <h1>วิเคราะห์สภาพผิว</h1>
      <div className="upload-section">
        <input type="file" onChange={handleImageUpload} accept="image/*" />
        <button onClick={handlePrediction} disabled={!uploadedImage}>วิเคราะห์</button>
      </div>
      {uploadedImage && predictionResult && (
        <PredictionResults 
          uploadedImage={uploadedImage} 
          predictionResult={predictionResult} 
        />
      )}
    </div>
  );
};

export default AnalysisPage1;