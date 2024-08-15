/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import useLanguage from '../contexts/useLanguage';
import './SkinInfo.css';
import skinEN from '../../assets/skin-types.webp'
import skinTH from '../../assets/skin-types-th.webp'
import morning from '../../assets/morning-routine.webp'
import night from '../../assets/night-routine.webp'

const SkinInfo = () => {
  const { texts, language } = useLanguage();

  const skinTypes = [
    {
      type: language === 'th' ? 'ผิวปกติ' : 'Normal Skin',
      description: language === 'th' 
        ? 'ผิวที่สมดุลดีเรียกว่าผิวประเภทปกติ ผิวของคุณจัดอยู่ในประเภทนี้หากมีความสมดุลของน้ำมันและความชื้นที่ดี'
        : 'A well-balanced skin is referred to as the normal skin type. Your skin falls under this category if it has a good balance of oil and moisture.',
      characteristics: language === 'th'
        ? ['เนื้อสัมผัสและสีผิวสม่ำเสมอ', 'ยืดหยุ่นดี', 'ไม่มีสิว', 'รูขุมขนเล็ก']
        : ['Even texture and tone', 'Good elasticity', 'Blemish free', 'Small pores'],
      image: '/images/normal-skin.jpg'
    },
    {
      type: language === 'th' ? 'ผิวแห้ง' : 'Dry Skin',
      description: language === 'th'
        ? 'ผิวประเภทนี้ผลิตน้ำมันน้อยลง ส่งผลให้ขาดไขมันที่จำเป็นในการรักษาความชื้นเพื่อปกป้องผิวจากอิทธิพลภายนอก'
        : 'This skin type produces less sebum as a result of which it lacks lipids that it needs to retain moisture to protect the skin against external influences.',
      characteristics: language === 'th'
        ? ['เนื้อหยาบ', 'รูขุมขนกระชับ', 'ยืดหยุ่นน้อย', 'ริ้วรอยชัดเจน (แก่ก่อนวัย)']
        : ['Coarse texture', 'Tight pores', 'Less elasticity', 'More visible lines (premature aging)'],
      advice: language === 'th' ? 'ควรใช้ผลิตภัณฑ์ดูแลผิวที่มีน้ำมันเป็นส่วนประกอบหลัก' : 'You should use skin care products with an oil base.',
      image: '/images/dry-skin.jpg'
    },
    {
      type: language === 'th' ? 'ผิวมัน' : 'Oily Skin',
      description: language === 'th'
        ? 'ตรงกันข้ามกับผิวแห้ง ผิวมันผลิตน้ำมันมากเกินไป'
        : 'Contrary to dry skin, oily skin overproduces sebum.',
      characteristics: language === 'th'
        ? ['รูขุมขนกว้าง', 'มีความมันเงา', 'มีแนวโน้มเป็นสิวง่าย', 'สีผิวดี']
        : ['Enlarged pores', 'Greasy and shiny appearance', 'Prone to acne', 'Good skin tone'],
      advice: language === 'th' ? 'ควรใช้ผลิตภัณฑ์ดูแลผิวที่มีน้ำเป็นส่วนประกอบหลัก' : 'You should use skin care products with a water base.',
      image: '/images/oily-skin.jpg'
    },
    {
      type: language === 'th' ? 'ผิวผสม' : 'Combination Skin',
      description: language === 'th'
        ? 'ผิวประเภทนี้มีลักษณะของทั้งผิวแห้งและผิวมัน มักจะมีความมันในบริเวณทีโซน (หน้าผาก จมูก และคาง) ขณะที่แก้มและด้านข้างของใบหน้าอาจเป็นปกติหรือแห้ง'
        : 'This skin type has the characteristics of both dry and oily skin. It is one of the most common skin types with oilier usually in the T-zone area (forehead, nose and chin), while the cheeks and sides of the face can be either normal or dry.',
      characteristics: language === 'th'
        ? ['รูขุมขนกว้างในบริเวณทีโซน', 'เนื้อหนาในบริเวณที่มัน', 'มีแนวโน้มเป็นสิวในบริเวณที่มัน']
        : ['Larger pores around the T-zone', 'Thicker texture in oily areas', 'Prone to blemishes around oilier areas'],
      advice: language === 'th' ? 'ควรหลีกเลี่ยงการใช้ผลิตภัณฑ์ดูแลผิวที่มีน้ำมันเป็นส่วนประกอบในบริเวณทีโซน' : 'You should avoid applying oil-based skin care products on the T-zone.',
      image: '/images/combination-skin.jpg'
    }
  ];

  const skinCareRoutine = {
    morning: [
      { 
        step: 'Cleanse', 
        stepTh: 'ทำความสะอาดผิวหน้า',
        description: 'Wash your face with a gentle cleanser (or water if you\'re in a rush).',
        descriptionTh: 'ล้างหน้าด้วยผลิตภัณฑ์ทำความสะอาดผิวหน้าที่อ่อนโยน (หรือใช้น้ำเปล่าหากรีบ)'
      },
      { 
        step: 'Treat', 
        stepTh: 'การดูแลรักษา',
        description: 'Apply your products in a thin layer or use your other skin treatment (acne care) as directed.',
        descriptionTh: 'ทาผลิตภัณฑ์รักษาสิวเป็นชั้นบางๆ หรือใช้ผลิตภัณฑ์รักษาสิวตามคำแนะนำ'
      },
      { 
        step: 'Moisturize', 
        stepTh: 'การให้ความชุ่มชื้นผิว',
        description: 'Apply moisturizer (Cream, Gel, Lotion). You can use a broad-spectrum moisturizing sunscreen with at least SPF 30+ PA+++ to skip step 4-5.',
        descriptionTh: 'ใช้มอยเจอร์ไรเซอร์ (ครีม เจล โลชั่น) คุณสามารถใช้ครีมกันแดดที่มีค่า อย่างน้อย SPF 30+ PA+++ ขึ้นไป เพื่อข้ามขั้นตอนที่ 4 และ 5'
      },
      { 
        step: 'Moisturize', 
        stepTh: 'การให้ความชุ่มชื้นผิว (เฉพาะกลางวัน)',
        description: 'Apply day cream moisturizer (Cream, Gel, Lotion)',
        descriptionTh: 'ใช้มอยเจอร์ไรเซอร์สำหรับกลางวัน (ครีม เจล โลชั่น)'
      },
      { 
        step: 'Protect', 
        stepTh: 'ปกป้องผิว',
        description: 'Apply a broad-spectrum sunscreen with at least SPF 30+ PA+++.',
        descriptionTh: 'ทาครีมกันแดดที่มีค่าอย่างน้อย SPF 30+ PA+++ ขึ้นไป'
      }
    ],
    night: [
      { 
        step: 'Cleanse', 
        stepTh: 'ทำความสะอาดผิวหน้า',
        description: 'Wash your face with a gentle cleanser.',
        descriptionTh: 'ล้างหน้าด้วยผลิตภัณฑ์ทำความสะอาดผิวหน้าที่อ่อนโยน'
      },
      { 
        step: 'Cleanse', 
        stepTh: 'ทำความสะอาดผิวหน้า (ขั้นตอนที่สอง)',
        description: 'Now\'s the time to remove your makeup (we like micellar water for this).',
        descriptionTh: 'เป็นเวลาที่จะล้างเครื่องสำอางออก (เราแนะนำ Micellar water)'
      },
      { 
        step: 'Special addition', 
        stepTh: 'การดูแลเพิ่มเติม',
        description: 'Facial mask with a sheet mask, jelly mask, or clay mask with active ingredients help with acne care or botanical extracts that have anti-inflammatory properties.',
        descriptionTh: 'มาส์กหน้า เช่น แผ่นมาส์ก เจลมาส์ก หรือมาส์กโคลนที่มีส่วนผสมช่วยดูแลสิวหรือสารสกัดจากธรรมชาติที่มีคุณสมบัติต้านการอักเสบ'
      },
      { 
        step: 'Treat', 
        stepTh: 'การดูแลรักษา',
        description: 'Apply your products in a thin layer or use your other skin treatment (acne care) as directed.',
        descriptionTh: 'ทาผลิตภัณฑ์รักษาสิวเป็นชั้นบางๆ หรือใช้ผลิตภัณฑ์รักษาสิวตามคำแนะนำ'
      },
      { 
        step: 'Moisturize', 
        stepTh: 'การให้ความชุ่มชื้นผิว',
        description: 'Apply a moisturizer— ultra-hydrating rich moisturizer (Cream, Gel, Lotion).',
        descriptionTh: 'ทามอยเจอร์ไรเซอร์ที่เข้มข้น เพื่อเพิ่มความชุ่มชื้นสูงให้กับผิว (ครีม เจล โลชั่น)'
      },
      { 
        step: 'Moisturize', 
        stepTh: 'การให้ความชุ่มชื้นผิว (เฉพาะกลางคืน)',
        description: 'Apply a night cream or night moisturizer — ultra-hydrating rich moisturizer (Cream, Gel, Lotion).',
        descriptionTh: 'ทาครีมสำหรับกลางคืนหรือมอยเจอร์ไรเซอร์กลางคืน เข้มข้น เพื่อเพิ่มความชุ่มชื้นสูงให้กับผิว (ครีม เจล โลชั่น)'
      }
    ],
    moisturizers: [
      { en: 'Ginkgo biloba', th: 'ใบแปะก๊วย' },
      { en: 'Aloe vera', th: 'ว่านหางจระเข้' },
      { en: 'Green tea', th: 'ชาเขียว' },
      { en: 'Allantoin', th: 'อัลแลนโทอิน' },
      { en: 'Licochalcone', th: 'รากชะเอม' },
      { en: 'Cica (Centellar Asiatica)', th: 'ใบบัวบก' }
    ],
    activeIngredients: [
      'Zinc PCA (1%)',
      'Nicotinamide (Vitamin B3 : 5%)',
      'Alpha Hydroxy Acid (AHA) Glycolic Acid, Lactic Acid (10%)',
      'Beta Hydroxy Acid (BHA) Salicylic Acid (1-2%)',
      'PHA (Poly Hydroxy Acid) Gluconolactone, lactobionic acid (4-10%)',
      'LHA (Lipo Hydroxy Acid) Caproloyl salicylic acid (1-2%)'
    ]
  };

  return (
    <Container fluid className="skin-info-container">
      <h2 className="text-center mb-5 main-title">{language === 'th' ? 'ข้อมูลทั่วไปเกี่ยวกับผิวของคุณ' : 'Normal Information about your skin'}</h2>
      
      <section className="skin-types-section mb-5">
        <h3 className="section-title">{language === 'th' ? 'ประเภทของผิว' : 'Skin Types'}</h3>
        <h5 className="skin-tyh5e-link">
          {language === 'th' ? 'คลิกเพื่อ' : 'Click for'}{' '}
          <a 
            href="https://6031703038.wixsite.com/website" 
            target="_blank" 
            rel="noopener noreferrer"
            className="check-skin-type-link"
          >
            {language === 'th' ? 'ตรวจสอบประเภทผิวของคุณ' : 'Check your skin type'}
          </a>
        </h5>
        <div className="skin-types-image-container">
          <img 
            src={language === 'th' ? skinTH : skinEN} 
            alt={language === 'th' ? "ประเภทของผิว" : "Skin Types"} 
            className="skin-types-image" 
          />
          <div className="skin-types-image-overlay"></div>
        </div>
        <div className="skin-types-grid mt-4">
          {skinTypes.map((skin, index) => (
            <Card key={index} className="skin-type-card">
              <Card.Body>
                <Card.Title>{skin.type}</Card.Title>
                <Card.Text>{skin.description}</Card.Text>
                <h5>{language === 'th' ? 'ลักษณะ:' : 'Characteristics:'}</h5>
                <ul>
                  {skin.characteristics.map((char, idx) => (
                    <li key={idx}>{char}</li>
                  ))}
                </ul>
                {skin.advice && <p className="advice"><strong>{language === 'th' ? 'คำแนะนำ:' : 'Advice:'}</strong> {skin.advice}</p>}
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
  
      <section className="skincare-routine-section mb-5">
        <h3 className="section-title">{language === 'th' ? 'ขั้นตอนการดูแลผิว' : 'Skincare Routine'}</h3>
        <Row>
          <Col lg={6} className="mb-4">
            <div className="routine-image-container">
              <img src={morning} alt="Morning Skincare Routine" className="routine-image" />
              <div className="routine-image-overlay">
                <h4>{language === 'th' ? 'ขั้นตอนการดูแลผิวตอนเช้า' : 'Morning Skincare Routine'}</h4>
              </div>
            </div>
            <Card className="routine-card">
              <Card.Body>
                <Card.Title>{language === 'th' ? 'ขั้นตอนการดูแลผิวตอนเช้า' : 'Morning Skincare Routine'}</Card.Title>
                <ol>
                  {skinCareRoutine.morning.map((step, index) => (
                    <li key={index}>
                      <strong>{language === 'th' ? step.stepTh : step.step}:</strong> {language === 'th' ? step.descriptionTh : step.description}
                    </li>
                  ))}
                </ol>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <div className="routine-image-container">
              <img src={night} alt="Nighttime Skincare Routine" className="routine-image" />
              <div className="routine-image-overlay">
                <h4>{language === 'th' ? 'ขั้นตอนการดูแลผิวตอนกลางคืน' : 'Nighttime Skincare Routine'}</h4>
              </div>
            </div>
            <Card className="routine-card">
              <Card.Body>
                <Card.Title>{language === 'th' ? 'ขั้นตอนการดูแลผิวตอนกลางคืน' : 'Nighttime Skincare Routine'}</Card.Title>
                <ol>
                  {skinCareRoutine.night.map((step, index) => (
                    <li key={index}>
                      <strong>{language === 'th' ? step.stepTh : step.step}:</strong> {language === 'th' ? step.descriptionTh : step.description}
                    </li>
                  ))}
                </ol>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
  
      <section className="ingredients-section">
        <h3 className="section-title">{language === 'th' ? 'ส่วนผสมสำคัญในการดูแลผิว' : 'Key Skincare Ingredients'}</h3>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="ingredient-card">
              <Card.Body>
                <Card.Title>{language === 'th' ? 'ส่วนผสมของมอยส์เจอไรเซอร์' : 'Moisturizers'}</Card.Title>
                <Card.Text>{language === 'th' ? 'ส่วนผสมจากธรรมชาติที่มีคุณสมบัติต้านการอักเสบ:' : 'Moisturizers containing botanical extracts have anti-inflammatory properties:'}</Card.Text>
                <ul>
                  {skinCareRoutine.moisturizers.map((item, index) => (
                    <li key={index}>{language === 'th' ? `${item.th} (${item.en})` : `${item.en} (${item.th})`}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="ingredient-card">
              <Card.Body>
                <Card.Title>{language === 'th' ? 'ส่วนผสมที่ช่วยในการดูแลสิว' : 'Active Ingredients for Acne Care'}</Card.Title>
                <ul>
                  {skinCareRoutine.activeIngredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default SkinInfo;