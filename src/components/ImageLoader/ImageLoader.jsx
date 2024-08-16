/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
import { Button, ProgressBar, Alert, Modal } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloudUploadAlt, FaImage } from 'react-icons/fa';
import './ImageLoader.css';
import PropTypes from 'prop-types';
import useLanguage from '../contexts/useLanguage';
import heic2any from 'heic2any';


const ImageUploader = ({ onImageUpload, onReset }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { texts } = useLanguage();

  const handlePreview = useCallback(async (file) => {
    try {
      let previewFile = file;
      if (file.type === 'image/heic' || file.type === 'image/heif') {
        const jpegBlob = await heic2any({
          blob: file,
          toType: 'image/jpeg',
          quality: 0.8
        });
        previewFile = new File([jpegBlob], file.name.replace(/\.(heic|heif)$/i, '.jpg'), { type: 'image/jpeg' });
      }
      const previewUrl = URL.createObjectURL(previewFile);
      setPreview(previewUrl);
      setFile(previewFile);
    } catch (error) {
      console.error('Error converting HEIF/HEIC:', error);
      setError(texts.uploader.heifConversionError);
    }
  }, [texts.uploader.heifConversionError]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      setError(texts.uploader.errorMessage);
    } else if (acceptedFiles && acceptedFiles.length > 0) {
      handlePreview(acceptedFiles[0]);
      setError('');
    }
  }, [texts.uploader.errorMessage, handlePreview]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.heic', '.heif']
    },
    maxFiles: 1
  });

  const handleUpload = useCallback(() => {
    if (!file) return;
    setIsUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append('image', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://predictacne-jc3i5ycouq-et.a.run.app/check_face', true);
    
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setProgress(percentComplete);
      }
    };

    xhr.onload = () => {
      setIsUploading(false);
      if (xhr.status === 200) {
        onImageUpload(file, preview);
      } else {
        setShowModal(true);
      }
    };

    xhr.onerror = () => {
      setError(texts.uploader.uploadError);
      setIsUploading(false);
    };

    xhr.send(formData);
  }, [file, preview, onImageUpload, texts.uploader.uploadError]);

  const handleReset = useCallback(() => {
    setFile(null);
    setPreview('');
    setProgress(0);
    setIsUploading(false);
    setError('');
    setShowModal(false);
    onReset();
  }, [onReset]);

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
            <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mt-3" animated />
          ) : (
            <div className="button-group mt-3">
              <Button variant="primary" onClick={handleUpload} disabled={isUploading}>
                {texts.uploader.addToProfile}
              </Button>
              <Button variant="secondary" onClick={handleReset} disabled={isUploading}>
                {texts.common.cancel}
              </Button>
            </div>
          )}
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{texts.uploader.noFaceDetected}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{texts.uploader.pleaseUploadAnother}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            {texts.common.close}
          </Button>
          <Button variant="primary" onClick={handleReset}>
            {texts.common.uploadNew}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ImageUploader.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default ImageUploader;