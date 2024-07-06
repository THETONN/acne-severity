
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import imageLand1 from '../../assets/image-land-1.png';
import imageLand2 from '../../assets/image-land-2.png';

const stories = [
  {
    title: "Get to know your skin",
    description:
      "Our AI Skin Analysis is as simple as taking a selfie and will help you better understand your skin's individual needs. Our online skin analysis method is extremely fast and precise. The ultra-fast algorithm provides the greatest user experience possible by recognizing two types of issues in less than two seconds.",
    image: imageLand2,
  },
  {
    title: "Using the analysis results, select the best products for your skin",
    description:
      "After analyzing your types of skin and your class of acne. The AI Skin Analysis will recommend items that are appropriate for your skin type and severity class of acne in order to achieve the greatest outcomes and to assist you in making a decision during your buy-the-product experience from pharmacy.",
    image: imageLand1,
  },
];

const StoryItem = ({ item, index }) => {
  const { title, description, image } = item;
  return (
    <>
      <Col
        xs={12}
        md={5}
        className={index % 2 === 0 ? "order-2" : "order-2 order-md-1"}
      >
        <div
          className={`d-flex flex-column justify-content-center ezy__about6-content ${
            index % 2 === 0 ? "ps-md-5" : "pe-md-5"
          }`}
        >
          <h4 className="fw-bold mb-3">{title}</h4>
          <p className="mb-0">{description}</p>
        </div>
      </Col>
      <Col
        xs={12}
        md={5}
        className={`${
          index % 2 === 0 ? "order-1" : "order-1 order-md-2"
        } mb-4 mb-md-0`}
      >
        <div>
          <img src={image} alt={title} className="img-fluid img-custom" />
        </div>
      </Col>
    </>
  );
};

StoryItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const AboutUs = () => {
  return (
    <section className="ezy__about6" id="ezy__about6">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col xs={12} md={8}>
            <h2 className="ezy__about6-heading fw-bold mb-4">Our Story</h2>
            <p className="ezy__about6-sub-heading">
              Our AI-driven skin analysis technology revolutionizes the way you
              understand and care for your skin. By simply taking a selfie, our
              advanced algorithm provides an in-depth analysis of your skin
              condition, recognizing various issues in just seconds. Our goal is
              to empower you with personalized insights and recommendations,
              helping you to achieve healthier, clearer skin with confidence.
            </p>
          </Col>
        </Row>

        {stories.map((item, i) => (
          <Row
            className="align-items-center justify-content-center mt-5"
            key={i}
          >
            <StoryItem item={item} index={i} />
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default AboutUs;
