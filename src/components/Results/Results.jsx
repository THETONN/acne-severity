// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import './Results.css';
// import PropTypes from 'prop-types';
// PredictionResults.propTypes = {
//     uploadedImage: PropTypes.string.isRequired,
//     predictionResult: PropTypes.shape({
//       skinType: PropTypes.string,
//       nonInflammation: PropTypes.string,
//       mildInflammation: PropTypes.string,
//       severeInflammation: PropTypes.string,
//     }).isRequired,
//   };

// const PredictionResults = ({ uploadedImage, predictionResult }) => {
    
//   const [currentSlide, setCurrentSlide] = useState(0);
//   if (!uploadedImage || !predictionResult) {
//     return <div>Loading...</div>; // หรือจัดการกรณีที่ข้อมูลยังไม่พร้อม
//   }
  

//   const slides = [
//     {
//       type: 'result',
//       content: (
//         <>
//           <h2>ผลการทำนาย</h2>
//           <p>ประเภทผิวของคุณคือ <strong>{predictionResult.skinType}</strong></p>
//           <div className="severity-types">
//             <h3>ระดับความรุนแรงของสภาพผิว</h3>
//             <p><strong>Non-inflammation:</strong> {predictionResult.nonInflammation}</p>
//             <p><strong>Mild inflammation:</strong> {predictionResult.mildInflammation}</p>
//             <p><strong>Severe inflammation:</strong> {predictionResult.severeInflammation}</p>
//           </div>
//         </>
//       )
//     },
//     {
//       type: 'advice',
//       content: (
//         <>
//           <h2>คำแนะนำในการดูแลผิวหน้า</h2>
//           <p>1. ล้างหน้าด้วยน้ำอุ่นและคลีนเซอร์อ่อนโยนวันละ 2 ครั้ง</p>
//           <p>2. ใช้โทนเนอร์ไม่มีแอลกอฮอล์เพื่อปรับสมดุลผิว</p>
//           <p>3. ทามอยส์เจอไรเซอร์เพื่อเพิ่มความชุ่มชื้นให้ผิว</p>
//           <p>4. ใช้ครีมกันแดด SPF 30 ขึ้นไปทุกวัน</p>
//           <p>5. หลีกเลี่ยงการแตะหรือบีบสิว</p>
//         </>
//       )
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="prediction-results">
//       <div className="image-container">
//         <img src={uploadedImage} alt="Uploaded face" className="uploaded-image" />
//       </div>
//       <div className="results-container">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.3 }}
//             className="slide-content"
//           >
//             {slides[currentSlide].content}
//           </motion.div>
//         </AnimatePresence>
//         <div className="navigation-buttons">
//           <button onClick={prevSlide} className="nav-button"><FaChevronLeft /></button>
//           <button onClick={nextSlide} className="nav-button"><FaChevronRight /></button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PredictionResults;