// eslint-disable-next-line no-unused-vars
import React from 'react';
import './AILoadingAnimation.css';

const AILoadingAnimation = () => {
  return (
    <div className="ai-loading-container">
      <div className="ai-loading-brain">
        <div className="ai-loading-circle"></div>
        <div className="ai-loading-circle"></div>
        <div className="ai-loading-circle"></div>
      </div>
      <div className="ai-loading-text">AI กำลังวิเคราะห์...</div>
    </div>
  );
};

export default AILoadingAnimation;