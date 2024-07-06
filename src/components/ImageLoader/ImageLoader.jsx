// eslint-disable-next-line no-unused-vars
import React, { useState, useCallback } from 'react';
import { Button, ProgressBar, Alert } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloudUploadAlt, FaImage } from 'react-icons/fa';
import './ImageLoader.css';
import PropTypes from 'prop-types';
import useLanguage from '../contexts/useLanguage';

const ImageUploader = ({ onImageUpload, onReset }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const { texts } = useLanguage();

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      setError(texts.uploader.errorMessage);
    } else if (acceptedFiles && acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      const previewUrl = URL.createObjectURL(acceptedFiles[0]);
      setPreview(previewUrl);
      setError('');
    }
  }, [texts.uploader.errorMessage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 1
  });

  const handleUpload = () => {
    if (!file) return;
    setIsUploading(true);
    setProgress(0);

    const uploadTask = new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });

    uploadTask.then(() => {
      setIsUploading(false);
      onImageUpload(preview);
    });
  };

  const handleReset = () => {
    setFile(null);
    setPreview('');
    setProgress(0);
    setIsUploading(false);
    setError('');
    onReset();
  };

  return (
    <div className="image-uploader">
      <h2>{texts.uploader.uploadTitle}</h2>
      <p>{texts.uploader.uploadSubtitle}</p>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Alert variant="danger" onClose={() => setError('')} dismissible>
              {error}
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <div {...getRootProps()} className={`upload-area ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <FaCloudUploadAlt className="upload-icon" />
        <span>{texts.uploader.dragAndDrop}</span>
        <span>{texts.uploader.orClickToSelect}</span>
        <div className="file-types">
          <FaImage /> 
        </div>
      </div>

      {preview && (
        <div className="preview-area">
          <img src={preview} alt="Preview" className="preview-image" />
          {isUploading ? (
            <ProgressBar now={progress} label={`${progress}%`} className="mt-3" animated />
          ) : (
            <div className="button-group mt-3">
              <Button variant="primary" onClick={handleUpload}>
                {texts.uploader.addToProfile}
              </Button>
              <Button variant="secondary" onClick={handleReset}>
                {texts.common.cancel}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

ImageUploader.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default ImageUploader;