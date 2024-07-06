// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaGlobeAmericas } from 'react-icons/fa';
import { GB, TH } from 'country-flag-icons/react/3x2';
import useLanguage from '../contexts/useLanguage';
import './Langselect.css';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const [show, setShow] = useState(false);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setShow(false);
  };

  return (
    <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
      <Dropdown.Toggle variant="light" id="language-selector" className="language-selector-toggle">
        <FaGlobeAmericas className="globe-icon" />
        {language === 'en' ? 'EN' : 'TH'}
      </Dropdown.Toggle>

      <Dropdown.Menu className="language-selector-menu">
        <Dropdown.Item onClick={() => handleLanguageChange('en')} active={language === 'en'}>
          <GB className="flag-icon" /> English
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('th')} active={language === 'th'}>
          <TH className="flag-icon" /> ไทย
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;