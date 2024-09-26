import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import useLanguage from '../contexts/useLanguage';
import './PredictionResults.css';

const PredictionResults = ({ uploadedImage, predictionResult }) => {
  const { texts, language } = useLanguage();

  function getSeverityDetails(severityLevel, texts, language) {
    const severityDetails = {
      0: {
        skinType: language === 'th' ? `ความรุนแรงระดับ 1: ${texts.predictionResults.nonInflammation}` : `Severity 1: ${texts.predictionResults.nonInflammation}`,
        description: language === 'th' ? 'สิวหัวดำ/สิวหัวขาว' : 'Comedolytic (Blackhead/Whitehead)',
        advice: (
          <React.Fragment>
            <p><strong>{language === 'th' 
              ? 'คุณสามารถเลือกใช้ผลิตภัณฑ์ทาสิวที่แนะนำเพียงหนึ่งเดียว (การใช้ผลิตภัณฑ์ทาเฉพาะจุด)' 
              : 'You can choose the only one that recommends topical products for acne treatment. (Topical monotherapy)'}</strong></p>
            <ul className="custom-list">
              <li><strong>{language === 'th' ? 'เรตินอยด์ (0.01-0.1%):' : 'Retinoid (0.01-0.1%):'}</strong> {language === 'th'
                ? 'ทาเรตินอยด์เป็นชั้นบางๆ ทั่วใบหน้าในขั้นตอนการดูแลผิวก่อนนอน ระวังอย่าให้เข้าปาก จมูก และตา ใช้ในปริมาณขนาดเมล็ดถั่ว สำหรับสัปดาห์แรกของการรักษาให้ทาเรตินอยด์ทุกๆ สองวัน เมื่อเสร็จแล้วให้ทามอยส์เจอไรเซอร์ที่ไม่อุดตันรูขุมขน (ไม่ก่อให้เกิดการอุดตัน) ควรทาครีมกันแดดที่มี SPF 30+ PA+++ ทุกเช้าหรือก่อนออกแดด'
                : 'Apply retinoid in a thin layer to your entire face at night skincare routine. Be careful not to get it in your mouth, nostrils, and eyes. You should use a dose that\'s about the size of a pea. For the first couple weeks of treatment, apply retinoid only every other day. Finish with a facial moisturizer that won\'t clog your pores (non-comedogenic). You must apply a broad-spectrum sunscreen with at least SPF 30 to your face every morning.'}</li>
              <li><strong>{language === 'th' ? 'เบนโซอิลเปอร์ออกไซด์ (2.5-10%):' : 'Benzoyl peroxide (2.5-10%):'}</strong> {language === 'th'
                ? 'ทาวันละ 1-2 ครั้ง ทาก่อนอาบน้ำเป็นเวลา 5-10 นาที เป็นชั้นบางๆ บนใบหน้าแล้วล้างออก หลังจากนั้นให้ทามอยส์เจอไรเซอร์เพื่อลดผลข้างเคียง หลีกเลี่ยงบริเวณที่บอบบาง เช่น ใต้ตา ร่องข้างจมูก และรอบปาก สำหรับผู้ที่เริ่มใช้ควรใช้เบนโซอิลเปอร์ออกไซด์ในความเข้มข้น 2.5%'
                : 'Apply 1-2 times daily. Apply before taking a shower for 5–10 minutes in a thin layer on the face and then wash off. Apply moisturizer afterward to reduce side effects. Avoid sensitive areas such as under the eyes, nostrils, and around the mouth. For beginners, start with 2.5% concentration.'}</li>
              <li><strong>{language === 'th' ? 'กรดอะซีลาอิก (20%):' : 'Azelaic acid (20%):'}</strong> {language === 'th'
                ? 'ก่อนใช้ให้ล้างบริเวณที่มีปัญหาด้วยน้ำและสบู่อ่อนๆ หรือโลชั่นทำความสะอาดที่ไม่มีส่วนผสมของสบู่ ล้างให้สะอาดและซับให้แห้ง เขย่าขวดก่อนใช้ ทายาจำนวนน้อยไปยังบริเวณที่มีปัญหาและถูเบาๆ ทายากรดอะซีลาอิกในตอนกลางคืนและใช้ครีมกันแดดในตอนกลางวัน'
                : 'Before applying, wash the affected area with water and a mild soap or a cleansing lotion that does not contain soap. Rinse well and pat dry. Shake the foam can well before using. Apply a small amount of the medicine to each affected area and gently rub it in. Be sure to apply your azelaic acid at night and practice wearing sunscreen during the day.'}</li>
            </ul>
            <p><strong>{language === 'th' ? 'ผลิตภัณฑ์ยาเรตินอยด์:' : 'The Medication Products of Retinoid:'}</strong></p>
            <ul className="custom-list">
              <li>Adapalene (Differin®, Epiduo®)</li>
              <li>Tazarotene (Tazorac®, Avage®)</li>
              <li>Tretinoin (Atralin®, Avita®, Refissa®, Renova®, Retin-A®, Tretin-X®)</li>
            </ul>
            <p><strong>{language === 'th' ? 'ผลข้างเคียง:' : 'Side Effects:'}</strong></p>
            <ul className="custom-list columns-2">
              <li>{language === 'th' ? 'ผิวแดง' : 'Redness'}</li>
              <li>{language === 'th' ? 'ผิวลอก' : 'Peeling'}</li>
              <li>{language === 'th' ? 'ผิวแห้ง' : 'Drying'}</li>
              <li>{language === 'th' ? 'อาการคัน' : 'Itching'}</li>
              <li>{language === 'th' ? 'ผิวไวต่อแสง' : 'Photosensitivity'}</li>
              <li>{language === 'th' ? 'รู้สึกแสบร้อนผิว' : 'Burning sensation'}</li>
              <li>{language === 'th' ? 'หากระคายเคืองผิว (ให้หยุดใช้ผลิตภัณฑ์และปรึกษาแพทย์ผิวหนัง)' : 'Skin irritants (stop to apply the products and consult with dermatologist)'}</li>
            </ul>
            <div className="alert alert-info mt-4">
              {language === 'th'
                ? '** เพื่อลดผลข้างเคียง คุณต้องทามอยส์เจอไรเซอร์ทุกครั้งในการดูแลผิวและทาครีมกันแดดที่มีค่า SPF อย่างน้อย 30+ PA+++ ทุกเช้า **'
                : '** To reduce side effects, you must apply moisturizer to every skin care routine and apply a broad-spectrum sunscreen with at least SPF 30+ PA+++ to your face every morning. **'}
            </div>
            <div className="mt-4 p-3 bg-light rounded-lg">
              <strong>{language === 'th'
                ? 'ปรึกษาแพทย์ผิวหนังหรือเภสัชกรก่อนใช้ผลิตภัณฑ์'
                : 'Consultation with dermatologist or pharmaceutical before you apply the products.'}</strong>
            </div>
          </React.Fragment>
        )
      },
      1: {
        skinType: language === 'th' ? `ความรุนแรงระดับ 2: ${texts.predictionResults.mildInflammation}` : `Severity 2: ${texts.predictionResults.mildInflammation}`,
        description: language === 'th' ? 'สิวอักเสบตุ่มหนองและสิวอักเสบตุ่มนูน' : 'Papule and pustules',
        advice: (
          <React.Fragment>
            <p><strong>{language === 'th'
              ? 'คุณสามารถเลือกใช้ผลิตภัณฑ์ทาภายนอกสำหรับการรักษาสิวได้ตามที่แนะนำ ทั้งการใช้เดี่ยวหรือการใช้ร่วมกัน (การรักษาด้วยยาทาภายนอกเดี่ยวหรือการรักษาด้วยยาทาภายนอกร่วมกัน)'
              : 'You can choose the only one or combination that recommends topical products for acne treatment. (Topical monotherapy or Topical combination therapy)'}</strong></p>
            <p><strong>{language === 'th' ? 'การรักษาด้วยยาทาภายนอกเดี่ยว:' : 'Topical monotherapy:'}</strong></p>
            <ul className="custom-list">
              <li><strong>{language === 'th' ? 'เรตินอยด์ (0.01-0.1%):' : 'Retinoid (0.01-0.1%):'}</strong> {language === 'th'
                ? 'ทาเรตินอยด์เป็นชั้นบางๆ ทั่วใบหน้าในขั้นตอนการดูแลผิวก่อนนอน (ระวังอย่าให้เข้าปาก จมูก และตา) ใช้ในปริมาณขนาดเมล็ดถั่ว สำหรับสัปดาห์แรกของการรักษาให้ทาเรตินอยด์ทุกๆ สองวัน แล้วจบด้วยการทาครีมบำรุงผิวที่ไม่อุดตันรูขุมขน (non-comedogenic) ควรทาครีมกันแดดที่มี SPF 30+ PA+++ ทุกเช้าหรือก่อนออกแดด'
                : 'Apply retinoid in a thin layer to your entire face at night skincare routine. Be careful not to get it in your mouth, nostrils, and eyes. You should use a dose that\'s about the size of a pea. For the first couple weeks of treatment, apply retinoid only every other day. Finish with a facial moisturizer that won\'t clog your pores (non-comedogenic). You must apply a broad-spectrum sunscreen with at least SPF 30 to your face every morning.'}</li>
              <li><strong>{language === 'th' ? 'เบนโซอิลเปอร์ออกไซด์ (2.5-10%):' : 'Benzoyl peroxide (2.5-10%):'}</strong> {language === 'th'
                ? 'ทาวันละ 1-2 ครั้ง ทาก่อนอาบน้ำเป็นชั้นบางๆ ทั่วใบหน้าทิ้งไว้ 5-10 นาที แล้วล้างออก หลังจากนั้นทาครีมบำรุงผิวเพื่อลดผลข้างเคียง หลีกเลี่ยงบริเวณที่ไวต่อการระคายเคือง เช่น ใต้ตา ร่องจมูก และรอบปาก (สำหรับผู้เริ่มต้น ควรใช้ความเข้มข้นของเบนโซอิลเปอร์ออกไซด์ 2.5%)'
                : 'Apply 1-2 times daily. Apply before taking a shower for 5–10 minutes in a thin layer on the face and then wash off. Apply moisturizer afterward to reduce side effects. Avoid sensitive areas such as under the eyes, nostrils, and around the mouth. For beginners, start with 2.5% concentration.'}</li>
              <li><strong>{language === 'th' ? 'กรดอะซีลาอิก (20%):' : 'Azelaic acid (20%):'}</strong> {language === 'th'
                ? 'ก่อนใช้ให้ล้างบริเวณที่มีปัญหาด้วยน้ำและสบู่อ่อนๆ หรือโลชั่นทำความสะอาดที่ไม่มีส่วนผสมของสบู่ ล้างให้สะอาดและซับให้แห้ง เขย่าขวดก่อนใช้ ทายาจำนวนน้อยไปยังบริเวณที่มีปัญหาและถูเบาๆ ทายากรดอะซีลาอิกในตอนกลางคืนและใช้ครีมกันแดดในตอนกลางวัน หากคุณใช้เซรั่มที่มีกรดอะซีลาอิก ให้ทาก่อนใช้มอยส์เจอไรเซอร์และครีมกันแดดที่มีกรดอะซีลาอิก'
                : 'Before applying, wash the affected area with water and a mild soap or a cleansing lotion that does not contain soap. Rinse well and pat dry. Shake the foam can well before using. Apply a small amount of the medicine to each affected area and gently rub it in. Be sure to apply your azelaic acid at night and practice wearing sunscreen during the day. If you\'re using a serum with azelaic acid, apply it before azelaic acid, moisturizers, and sunscreen.'}</li>
              <li><strong>{language === 'th' ? 'คลินดามัยซิน (1%) หรือ อิริโทรมัยซิน (1-4%):' : 'Clindamycin (1%) or Erythromycin (1-4%):'}</strong> {language === 'th'
                ? 'ทาวันละ 2-3 ครั้ง ทายาบางๆ ลงบนบริเวณที่เป็นสิวโดยตรง ทายาให้ทั่วบริเวณที่เป็นสิว ไม่ต้องทายาหนามาก ระวังอย่าให้ยาเข้าตา หลีกเลี่ยงบริเวณข้างจมูกหรือริมฝีปาก หากเกิดขึ้น ให้ล้างออกด้วยน้ำสะอาดทันที'
                : 'Apply 2-3 times daily. Apply a thin layer of the medication directly to the acne-affected areas. Ensure the medication covers the entire affected area without applying too much. Be careful not to get the medication in your eyes, nose, or mouth. If this happens, rinse thoroughly with clean water immediately.'}</li>
            </ul>  
            <p><strong>{language === 'th' ? 'การรักษาด้วยยาทาภายนอกร่วมกัน:' : 'Topical Combination Therapy:'}</strong></p>
            <ul className="custom-list">
            <li><strong>{language === 'th' ? 'เบนโซอิลเปอร์ออกไซด์ (2.5-10%) + คลินดามัยซิน (1%) หรือ อิริโทรมัยซิน (1-4%):' : 'Benzoyl peroxide (2.5-10%) + Clindamycin (1%) or Erythromycin (1-4%):'}</strong> {language === 'th'
              ? 'ทาเบนโซอิลเปอร์ออกไซด์วันละ 1-2 ครั้ง ทาก่อนอาบน้ำเป็นชั้นบางๆ ทั่วใบหน้าทิ้งไว้ 5-10 นาที แล้วล้างออก หลังจากนั้นทาครีมบำรุงผิวเพื่อลดผลข้างเคียง หลีกเลี่ยงบริเวณที่ไวต่อการระคายเคือง เช่น ใต้ตา ร่องจมูก และรอบปาก หลังจากนั้นทาคลินดามัยซินหรืออิริโทรมัยซินในปริมาณเล็กน้อยบางๆ วันละครั้งก่อนนอนหนึ่งชั่วโมง ทายาลงบนบริเวณที่เป็นสิวที่แห้งและสะอาดและถูเบาๆ'
              : 'Apply benzoyl peroxide 1-2 times daily. Apply before taking a shower for 5–10 minutes in a thin layer on the face and then wash off. Apply moisturizer afterward to reduce side effects. Avoid sensitive areas such as under the eyes, nostrils, and around the mouth. Then apply clindamycin or erythromycin a small amount as a thin film once a day, at least one hour before bedtime. Apply the medicine to dry, clean areas affected by acne. Rub in gently and well.'}</li>
            <li><strong>{language === 'th' ? 'เบนโซอิลเปอร์ออกไซด์ (2.5%) + อะดาพาลีน (0.1%):' : 'Benzoyl peroxide (2.5%) + Adapalene (0.1%):'}</strong> {language === 'th'
              ? 'ทาเจลอะดาพาลีนและเบนโซอิลเปอร์ออกไซด์เป็นชั้นบางๆ บนบริเวณที่เป็นสิวบนใบหน้าหรือลำตัววันละครั้งหลังล้างหน้า ใช้ในปริมาณขนาดเมล็ดถั่วสำหรับแต่ละบริเวณของใบหน้า (เช่น หน้าผาก คาง แต่ละแก้ม) หลีกเลี่ยงบริเวณรอบดวงตา ริมฝีปาก'
              : 'Apply a thin film of adapalene and benzoyl peroxide gel to affected areas of the face and/or trunk once daily after washing. Use a pea-sized amount for each area of the face (e.g., forehead, chin, each cheek). Avoid the eyes, lips, and mucous membranes.'}</li>
            <li><strong>{language === 'th' ? 'เบนโซอิลเปอร์ออกไซด์ (2.5%) + เรตินอยด์ (0.01-0.1%):' : 'Benzoyl peroxide (2.5%) + Retinoid (0.01-0.1%):'}</strong> {language === 'th'
              ? 'ทาเบนโซอิลเปอร์ออกไซด์วันละ 1-2 ครั้ง ทาก่อนอาบน้ำเป็นชั้นบางๆ ทั่วใบหน้าทิ้งไว้ 5-10 นาที แล้วล้างออก หลังจากนั้นทาเรตินอยด์เป็นชั้นบางๆ ทั่วใบหน้าในขั้นตอนการดูแลผิวก่อนนอน (หลีกเลี่ยงบริเวณปาก ร่องจมูก และตา) จบด้วยการทาครีมบำรุงผิวที่ไม่อุดตันรูขุมขน (non-comedogenic) ควรต้องทาครีมกันแดดที่มีค่า SPF อย่างน้อย 30+ PA+++ ทุกเช้า'
              : 'Apply benzoyl peroxide 1-2 times daily. Apply before taking a shower for 5–10 minutes in a thin layer on the face and then wash off. Afterward, apply retinoid in a thin layer to your entire face at night skincare routine. Be careful not to get it in your mouth, nostrils, and eyes. Finish with a facial moisturizer that won\'t clog your pores (non-comedogenic). You must apply a broad-spectrum sunscreen with at least SPF 30+ PA+++ to your face every morning.'}</li>
            <li><strong>{language === 'th' ? 'เบนโซอิลเปอร์ออกไซด์ (2.5%) + เตรติโนอิน (0.05%) หรือ ไอโซเตรติโนอิน (0.05%) + คลินดามัยซิน (1%) หรือ อิริโทรมัยซิน (1-4%):' : 'Benzoyl peroxide (2.5%) + Tretinoin (0.05%) or Isotretinoin (0.05%) + Clindamycin (1%) or Erythromycin (1-4%):'}</strong> {language === 'th'
              ? 'ทาเบนโซอิลเปอร์ออกไซด์วันละ 1-2 ครั้ง ทาบางๆก่อนอาบน้ำ ให้ทั่วใบหน้าทิ้งไว้ 5-10 นาที แล้วล้างออก ก่อนทาเจลให้ล้างและเช็ดผิวให้แห้ง ตามคำแนะนำของแพทย์ ให้ทาไอโซเตรติโนอินบางๆ บนบริเวณที่เป็นสิววันละครั้งหรือสองครั้ง ระวังไม่ให้เจลสะสมในรอยพับผิวหรือข้างจมูก และระวังไม่ให้ถูรอบดวงตา ปาก หรือข้างจมูก หลังจากนั้นทาคลินดามัยซิน (1%) หรืออิริโทรมัยซิน (1-4%) วันละ 2-3 ครั้ง'
              : 'Apply benzoyl peroxide 1-2 times daily. Apply before taking a shower for 5–10 minutes in a thin layer on the face and then wash off. Before applying the gel, wash and dry the skin. As advised by your doctor, isotretinoin should be thinly placed over the affected area(s) of skin once or twice a day. Make sure the gel doesnt accumulate in skin folds or the sides of the nose. Afterward, apply clindamycin or erythromycin 2-3 times daily.'}</li>
            <li><strong>{language === 'th' ? 'เตรติโนอิน (0.05%) + คลินดามัยซิน (1%) หรือ อิริโทรมัยซิน (1-4%):' : 'Tretinoin (0.05%) + Clindamycin (1%) or Erythromycin (1-4%):'}</strong> {language === 'th'
              ? 'ใช้ในปริมาณขนาดเมล็ดถั่วของคลินดามัยซินและเตรติโนอิน ทาทั่วใบหน้าก่อนนอนทุกคืน ในขณะที่ใช้ยานี้ไม่ควรล้างหน้ามากกว่าวันละสามครั้ง การล้างหน้าบ่อยเกินไปหรือถูแรงอาจทำให้สิวแย่ลง'
              : 'Use only a pea-sized quantity of the topical clindamycin and tretinoin. Apply to your entire face at bedtime every night. While taking this medication, do not wash your face more than three times every day. Acne might get worse if you wash your face more frequently or scrub it when you do.'}</li>
          </ul>
          <p><strong>{language === 'th' ? 'ผลิตภัณฑ์ยาเรตินอยด์:' : 'The Medication Products of Retinoid:'}</strong></p>
          <ul className="custom-list">
            <li>Adapalene (Differin®, Epiduo®)</li>
            <li>Tazarotene (Tazorac®, Avage®)</li>
            <li>Tretinoin (Atralin®, Avita®, Refissa®, Renova®, Retin-A®, Tretin-X®)</li>
          </ul>
          <p><strong>{language === 'th' ? 'ผลข้างเคียง:' : 'Side Effects:'}</strong></p>
          <ul className="custom-list columns-2">
            <li>{language === 'th' ? 'ผิวแดง' : 'Redness'}</li>
            <li>{language === 'th' ? 'ผิวลอก' : 'Peeling'}</li>
            <li>{language === 'th' ? 'ผิวแห้ง' : 'Drying'}</li>
            <li>{language === 'th' ? 'อาการคัน' : 'Itching'}</li>
            <li>{language === 'th' ? 'ผิวไวต่อแสง' : 'Photosensitivity'}</li>
            <li>{language === 'th' ? 'รู้สึกแสบร้อนผิว' : 'Burning sensation'}</li>
            <li>{language === 'th' ? 'หากระคายเคืองผิว (ให้หยุดใช้ผลิตภัณฑ์และปรึกษาแพทย์ผิวหนัง)' : 'Skin irritants (stop to apply the products and consult with dermatologist)'}</li>
          </ul>
          <div className="alert alert-info mt-4">
            {language === 'th'
              ? '** เพื่อลดผลข้างเคียงคุณต้องทามอยส์เจอไรเซอร์ทุกครั้งในการดูแลผิวและทาครีมกันแดดที่มีค่า SPF อย่างน้อย 30+ PA+++ ทุกเช้า **'
              : '** To reduce side effects, you must apply moisturizer to every skin care routine and apply a broad-spectrum sunscreen with at least SPF 30+ PA+++ to your face every morning. **'}
          </div>
          <div className="mt-4 p-3 bg-light rounded-lg">
            <strong>{language === 'th'
              ? 'ปรึกษาแพทย์ผิวหนังหรือเภสัชกรก่อนใช้ผลิตภัณฑ์'
              : 'Consultation with dermatologist or pharmaceutical before you apply the products.'}</strong>
          </div>
        </React.Fragment>
        )
      },
      2: {
        skinType: language === 'th' ? `ความรุนแรงระดับ 3: ${texts.predictionResults.severeInflammation}` : `Severity 3: ${texts.predictionResults.severeInflammation}`,
        description: language === 'th' ? 'สิวที่มีตุ่มหนอง สิวอักเสบตุ่มนูนและสิวอักเสบหลายๆตุ่มรวมกัน' : 'Papule, pustules, and multiple nodules',
        advice: (
          <React.Fragment>
            <p><strong>{language === 'th' 
              ? 'เลือกใช้เพียงหนึ่งตัวอย่างหรือการรักษาแบบผสมผสานที่แนะนำในการใช้ผลิตภัณฑ์ (Systemic therapy, Systemic and topical combination therapy)' 
              : 'You can choose the only one that recommends systemic products or combination for acne treatment. (Systemic therapy, Systemic and topical combination therapy)'}</strong></p>
            <p><strong>{language === 'th' ? 'แนะนำการใช้ยาชนิดรับประทาน Isotretinoin:' : 'Recommends to oral isotretinoin medicine:'}</strong></p>
            <ul className="custom-list">
              <li><strong>Isotretinoin:</strong> {language === 'th'
                ? 'อายุ ≥ 12 ปี 0.5-1 mg/kg/วัน รับประทานแบ่งเป็น 2 มื้อพร้อมอาหาร ระยะเวลาการใช้ยา 15-20 สัปดาห์'
                : '≥ 12 years of age, 0.5-1mg/kg/day orally in 2 divided doses with food. Duration of dosing 15-20 weeks.'}</li>
            </ul>
            <p><strong>{language === 'th' ? 'ผลข้างเคียง/พิษ:' : 'Adverse Effects/Toxicities:'}</strong></p>
            <ul className="custom-list columns-2">
              <li>{language === 'th' ? 'ระบบหัวใจและหลอดเลือด: เจ็บหน้าอก บวมน้ำ หน้าแดง และเส้นเลือดในสมองแตก' : 'Cardiovascular: chest pain, edema, flushing, stroke'}</li>
              <li>{language === 'th' ? 'ผิวหนัง: ผมร่วง ปากแห้ง ปฏิกิริยาภูมิแพ้ทางผิวหนัง จมูกแห้ง ผิวแห้ง และผิวไวต่อแสง' : 'Skin: alopecia, cheilitis, cutaneous allergic reaction, dry nose, dry skin, photosensitivity'}</li>
              <li>{language === 'th' ? 'ระบบทางเดินอาหาร: เลือดออกและการอักเสบของเหงือก ลำไส้อักเสบ หลอดอาหารอักเสบและคลื่นไส้' : 'Gastrointestinal: bleeding and inflammation of gums, colitis, esophagitis, nausea'}</li>
              <li>{language === 'th' ? 'ระบบตา: ตาแห้ง และเส้นประสาทตาอักเสบ' : 'Ocular: dry eyes, optic neuritis'}</li>
            </ul>
            <p><strong>{language === 'th' ? 'แนะนำการใช้ยาปฏิชีวนะชนิดรับประทาน:' : 'Recommends to oral antibiotics medicine:'}</strong></p>
            <ul className="custom-list">
              <li><strong>Doxycycline:</strong> {language === 'th'
                ? 'ผู้ใหญ่ 200 mg ในวันแรกของการรักษา (ให้ 100 mg ทุก 12 ชั่วโมง) ต่อด้วยขนาดรักษา 100 mg/วัน รับประทานทันทีหลังอาหาร'
                : 'Adults 200 mg on the first day of treatment (administered 100 mg every 12 hours) followed by a maintenance dose of 100 mg/day. Eat immediately after meals.'}</li>
              <li><strong>Tetracycline:</strong> {language === 'th'
                ? 'ผู้ใหญ่ 1,000-1,500 mg/วัน เมื่ออาการดีขึ้นลดขนาดยาลงเป็น 125-500 mg/วัน เด็ก (> 8 ปี) 25-50 mg/kg/วัน'
                : 'Adults 1,000-1,500 mg/day, reduced to 125-500 mg/day when symptoms improve. Children (> 8 years old): 25-50 mg/kg/day.'}</li>
              <li><strong>Minocycline:</strong> {language === 'th'
                ? 'ผู้ใหญ่ 50 mg 1-3 ครั้ง/วัน เด็ก (> 8 ปี) 4 mg/kg ทุก 12 ชั่วโมง'
                : 'Adults 50 mg 1-3 times/day. Children (> 8 years old): 4 mg/kg every 12 hours.'}</li>
              <li><strong>Erythromycin:</strong> {language === 'th' ? '500-1000 mg/วัน' : '500-1000 mg/day.'}</li>
              <li><strong>Azithromycin:</strong> {language === 'th' ? '500 mg 1-3 ครั้ง/สัปดาห์' : '500 mg 1-3 times/week.'}</li>
              <li><strong>Cotrimoxazole:</strong> {language === 'th' ? '800/160 mg วันละ 2 ครั้ง' : '800/160 mg twice daily.'}</li>
            </ul>
            <p><strong>{language === 'th' ? 'ผลข้างเคียง/พิษ (ยาปฏิชีวนะชนิดรับประทาน):' : 'Adverse Effects/Toxicities (Oral Antibiotics):'}</strong></p>
            <ul className="custom-list columns-2">
              <li>{language === 'th' ? 'ระบบทางเดินอาหาร: เบื่ออาหาร คลื่นไส้ ท้องเสีย และอาเจียน' : 'Gastrointestinal: anorexia, nausea, diarrhea, vomiting'}</li>
              <li>{language === 'th' ? 'ผิวหนัง: ผิวหนังตายจากพิษยา ผื่นหลายชนิด และไวต่อแสง' : 'Skin: toxic epidermal necrolysis, erythema multiforme, photosensitivity'}</li>
              <li>{language === 'th' ? 'แพ้ยา: ลมพิษ และบวมน้ำ' : 'Drug allergy: hives, edema'}</li>
            </ul>
            <p><strong>{language === 'th' 
              ? 'คุณสามารถเลือกคำแนะนำได้เพียงหนึ่งอย่างที่แนะนำผลิตภัณฑ์การรักษาแบบผสมผสานที่แนะนำในการใช้ผลิตภัณฑ์' 
              : 'You can choose the only one that recommends topical products for acne treatment. Recommends applying topical products with antibiotics.'}</strong></p>
            <ul className="custom-list">
              <li><strong>{language === 'th' ? 'ยาปฏิชีวนะชนิดรับประทาน + Benzoyl peroxide (2.5-10%):' : 'Oral antibiotics + Benzoyl peroxide (2.5-10%):'}</strong> {language === 'th'
                ? 'ใช้ 1-2 ครั้ง/วัน ทาบางๆ ก่อนอาบน้ำ 5-10 นาที แล้วล้างออก หลังจากนั้นทามอยส์เจอร์ไรเซอร์ หลีกเลี่ยงบริเวณใต้ตา ข้างจมูก และรอบปาก (สำหรับผู้ที่เริ่มใช้ควรใช้เบนโซอิลเปอร์ออกไซด์ในความเข้มข้น 2.5%)'
                : 'Apply 1-2 times daily. Apply before taking a shower for 5–10 minutes in a thin layer on the face and then wash off. Apply moisturizer afterward to reduce side effects. Avoid sensitive areas such as under the eyes, nostrils, and around the mouth. For beginners, start with 2.5% concentration.'}</li>
              <li><strong>{language === 'th' ? 'ยาปฏิชีวนะชนิดรับประทาน + Adapalene (0.1%):' : 'Oral antibiotics + Adapalene (0.1%):'}</strong> {language === 'th'
                ? 'ทาบางๆ บริเวณที่เป็นสิว 1 ครั้ง/วันหลังล้างหน้า ใช้ปริมาณเท่าเมล็ดถั่วสำหรับแต่ละบริเวณของใบหน้า (เช่น หน้าผาก คาง แก้มแต่ละข้าง) หลีกเลี่ยงตา ริมฝีปาก'
                : 'Apply a thin film of adapalene to affected areas of the face and/or trunk once daily after washing. Use a pea-sized amount for each area of the face (e.g., forehead, chin, each cheek). Avoid the eyes, lips, and mucous membranes.'}</li>
              <li><strong>{language === 'th' ? 'ยาปฏิชีวนะชนิดรับประทาน + Azelaic acid (20%):' : 'Oral antibiotics + Azelaic acid (20%):'}</strong> {language === 'th'
                ? 'ล้างบริเวณที่เป็นสิวด้วยน้ำและสบู่อ่อนๆ หรือโลชั่นล้างที่ไม่มีสบู่ ล้างออกให้สะอาดและซับให้แห้ง เขย่าขวดก่อนใช้ ทาปริมาณเล็กน้อยลงบนบริเวณที่เป็นสิว ทาเบาๆ ให้ทั่ว ควรทา Azelaic acid ในเวลากลางคืนและใช้ครีมกันแดดในเวลากลางวัน'
                : 'Before applying, wash the affected area with water and a mild soap or a cleansing lotion that does not contain soap. Rinse well and pat dry. Shake the foam can well before using. Apply a small amount of the medicine to each affected area and gently rub it in. Be sure to apply your azelaic acid at night and practice wearing sunscreen during the day.'}</li>
              <li><strong>{language === 'th' ? 'ยาปฏิชีวนะชนิดรับประทาน + Benzoyl peroxide (2.5%) + Retinoid (0.01-0.1%):' : 'Oral antibiotics + Benzoyl peroxide (2.5%) + Retinoid (0.01-0.1%):'}</strong> {language === 'th'
                ? 'ใช้ Benzoyl peroxide 1-2 ครั้ง/วัน ทาบางๆ ก่อนอาบน้ำ 5-10 นาที แล้วล้างออก หลังจากนั้นทา Retinoid บางๆ ทั่วหน้าในช่วงกลางคืน หลีกเลี่ยงปาก ร่องจมูก และตา ใช้มอยส์เจอร์ไรเซอร์ที่ไม่อุดตันรูขุมขน (non-comedogenic) และครีมกันแดดที่มีค่า SPF อย่างน้อย 30+ PA+++ในทุกเช้า'
                : 'Apply benzoyl peroxide 1-2 times daily. Apply before taking a shower for 5–10 minutes in a thin layer on the face and then wash off. Afterward, apply retinoid in a thin layer to your entire face at night skincare routine. Be careful not to get it in your mouth, nostrils, and eyes. Finish with a facial moisturizer that won\'t clog your pores (non-comedogenic). You must apply a broad-spectrum sunscreen with at least SPF 30 to your face every morning.'}</li>
               <li><strong>{language === 'th' ? 'ยาปฏิชีวนะชนิดรับประทาน + Benzoyl peroxide (2.5%) + Adapalene (0.1%):' : 'Oral antibiotics + Benzoyl peroxide (2.5%) + Adapalene (0.1%):'}</strong> {language === 'th'
              ? 'ทาบางๆ ของ Adapalene และ Benzoyl peroxide เจลลงบนบริเวณที่เป็นสิว 1 ครั้ง/วันหลังล้างหน้า ใช้ปริมาณเท่าเมล็ดถั่วสำหรับแต่ละบริเวณของใบหน้า หลีกเลี่ยงตา ริมฝีปาก'
              : 'Apply a thin film of adapalene and benzoyl peroxide gel to affected areas of the face and/or trunk once daily after washing. Use a pea-sized amount for each area of the face (e.g., forehead, chin, each cheek). Avoid the eyes, lips, and mucous membranes.'}</li>
            <li><strong>{language === 'th' ? 'ยาปฏิชีวนะชนิดรับประทาน + Clindamycin หรือ Erythromycin (3%) + Benzoyl peroxide (5%):' : 'Oral antibiotics + Clindamycin or Erythromycin (3%) + Benzoyl peroxide (5%):'}</strong> {language === 'th'
              ? 'ใช้ Benzoyl peroxide 1-2 ครั้ง/วัน ทาบางๆ ก่อนอาบน้ำ 5-10 นาที แล้วล้างออก หลังจากนั้นทามอยส์เจอร์ไรเซอร์ หลีกเลี่ยงบริเวณใต้ตา รูจมูก และรอบปาก จากนั้นทา Clindamycin หรือ Erythromycin เป็นฟิล์มบางๆ 1 ครั้ง/วัน อย่างน้อย 1 ชั่วโมงก่อนนอน ทาลงบนบริเวณที่เป็นสิวที่แห้งและสะอาด ทาเบาๆ และให้ทั่ว'
              : 'Apply benzoyl peroxide 1-2 times daily. Apply before taking a shower for 5–10 minutes in a thin layer on the face and then wash off. Apply moisturizer afterward to reduce side effects. Avoid sensitive areas such as under the eyes, nostrils, and around the mouth. Then apply clindamycin or erythromycin as a small amount as a thin film once a day, at least one hour before bedtime. Apply the medicine to dry, clean areas affected by acne. Rub in gently and well.'}</li>
            <li><strong>{language === 'th' ? 'ยาปฏิชีวนะชนิดรับประทาน + Tazarotene (0.1%) + Clindamycin (1%) หรือ Erythromycin (2%) + Benzoyl peroxide (2.5%):' : 'Oral antibiotics + Tazarotene (0.1%) + Clindamycin (1%) or Erythromycin (2%) + Benzoyl peroxide (2.5%):'}</strong> {language === 'th'
              ? 'ใช้ 1 ครั้ง/วันในช่วงเย็นหลังจากทำความสะอาดหน้า ทา Clindamycin หรือ Erythromycin ก่อนแล้วตามด้วย Tazarotene 5-10 นาทีต่อมา ทา Benzoyl peroxide เจลลงบนบริเวณที่เป็นสิว ใช้ปริมาณเท่าเมล็ดถั่วสำหรับแต่ละบริเวณของใบหน้า หลีกเลี่ยงตา ริมฝีปาก'
              : 'Apply once daily in the evening after facial cleansing. Clindamycin or erythromycin will be applied first, and tazarotene will be applied 5-10 minutes later. Apply benzoyl peroxide gel to affected areas of the face and/or trunk once daily after washing. Use a pea-sized amount for each area of the face (e.g., forehead, chin, each cheek). Avoid the eyes, lips, and mucous membranes.'}</li>
          </ul>
          <p><strong>{language === 'th' ? 'ผลข้างเคียง:' : 'Side Effects:'}</strong></p>
          <ul className="custom-list columns-2">
            <li>{language === 'th' ? 'ผิวแดง' : 'Redness'}</li>
            <li>{language === 'th' ? 'ผิวลอก' : 'Peeling'}</li>
            <li>{language === 'th' ? 'ผิวแห้ง' : 'Drying'}</li>
            <li>{language === 'th' ? 'อาการคัน' : 'Itching'}</li>
            <li>{language === 'th' ? 'ผิวไวต่อแสง' : 'Photosensitivity'}</li>
            <li>{language === 'th' ? 'รู้สึกแสบร้อนผิว' : 'Burning sensation'}</li>
            <li>{language === 'th' ? 'หากระคายเคืองผิว (ให้หยุดใช้ผลิตภัณฑ์และปรึกษาแพทย์ผิวหนัง)' : 'Skin irritants (stop to apply the products and consult with dermatologist)'}</li>
          </ul>
          <div className="alert alert-info mt-4">
            {language === 'th'
              ? '** เพื่อลดผลข้างเคียงคุณต้องทามอยส์เจอไรเซอร์ทุกครั้งในการดูแลผิวและทาครีมกันแดดที่มีค่า SPF อย่างน้อย 30+ PA+++ ทุกเช้า **'
              : '** To reduce side effects, you must apply moisturizer to every skin care routine and apply a broad-spectrum sunscreen with at least SPF 30+ PA+++ to your face every morning. **'}
          </div>
          <div className="mt-4 p-3 bg-light rounded-lg">
            <strong>{language === 'th'
              ? 'ควรปรึกษาแพทย์ผิวหนังหรือเภสัชกรก่อนใช้ผลิตภัณฑ์'
              : 'Consultation with dermatologist or pharmaceutical before you apply the products.'}</strong>
          </div>
        </React.Fragment>
      )
      }
    };

    return severityDetails[severityLevel] || {
      skinType: language === 'th' ? 'ไม่ทราบระดับความรุนแรง' : 'Unknown Severity',
      description: language === 'th' ? 'ไม่สามารถระบุระดับความรุนแรงได้' : 'Severity level not recognized.',
      advice: (
        <React.Fragment>
          <strong>{language === 'th' ? 'ไม่ทราบระดับความรุนแรง' : 'Unknown Severity'}</strong>
          <p>{language === 'th' 
            ? 'ไม่สามารถระบุระดับความรุนแรงได้ กรุณาปรึกษาแพทย์ผิวหนังเพื่อการประเมินเพิ่มเติม' 
            : 'Severity level not recognized. Consult a dermatologist for further assessment.'}</p>
        </React.Fragment>
      )
    };
  }

  const severityDetails = getSeverityDetails(predictionResult, texts, language);
  const getSeverityClass = (severity) => {
    switch(severity) {
      case 0: return 'severity-1';
      case 1: return 'severity-2';
      case 2: return 'severity-3';
      default: return '';
    }
  };

  return (
    <div className="prediction-results">
      <Card className="mb-4 main-card">
        <Card.Header as="h2" className="text-center bg-primary text-white py-3">
          {texts.predictionResults.title}
        </Card.Header>
        <Card.Body className="p-4">
          <Row className="align-items-center">
            <Col md={6}>
              <div className="image-container mb-4 mb-md-0">
                <Card.Img variant="top" src={uploadedImage} alt="Uploaded face" className="rounded-lg shadow-sm" />
              </div>
            </Col>
            <Col md={6}>
              <div className="result-info p-3 bg-light rounded-lg shadow">
                <h6 className="mb-3 text-primary">{texts.predictionResults.skinType}</h6>
                <div className="severity-result mb-3">
                  <span className={`severity-badge ${getSeverityClass(predictionResult)}`}>
                    {severityDetails.skinType}
                  </span>
                </div>
                <div className="severity-description">
                  <p className="mb-1"><strong>{language === 'th' ? 'คำอธิบาย:' : 'Description:'}</strong></p>
                  <p className="mb-0">{severityDetails.description}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4 acne-management-card">
        <Card.Header as="h3" className="bg-primary text-white py-4 text-center">
          {texts.skinCareAdvice.title}
        </Card.Header>
        <Card.Body className="p-4">
          <h4 className="section-title">{language === 'th' ? 'คำแนะนำการรักษา' : 'Treatment Recommendations'}</h4>

          <div className="info-section">
            <h5 className="info-section-title">{language === 'th' ? 'วิธีการรักษาที่แนะนำ' : 'Recommended Treatment'}</h5>
            <div className="mb-4">
              {severityDetails.advice}
            </div>
          </div>

          {/* {predictionResult === 3 && (
            <div className="info-section">
              <h5 className="info-section-title">{language === 'th' ? 'ยาปฏิชีวนะชนิดรับประทาน' : 'Oral Antibiotics'}</h5>
              <div>{severityDetails.advice.props.children.find(child => child.props?.children === (language === 'th' ? 'แนะนำการใช้ยาปฏิชีวนะชนิดรับประทาน:' : 'Recommends to oral antibiotics medicine:'))}</div>
            </div>
          )} */}
        </Card.Body>
      </Card>
    </div>
  );
};

PredictionResults.propTypes = {
  uploadedImage: PropTypes.string.isRequired,
  predictionResult: PropTypes.number.isRequired,
};

export default PredictionResults;