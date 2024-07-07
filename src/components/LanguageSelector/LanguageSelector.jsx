// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaGlobeAmericas } from 'react-icons/fa';
import { GB, TH } from 'country-flag-icons/react/3x2';
import useLanguage from '../contexts/useLanguage';
import './Langselect.css';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="light" id="language-selector" className="language-selector-toggle">
        <FaGlobeAmericas className="globe-icon" />
        {language === 'en' ? 'EN' : 'TH'}
      </Dropdown.Toggle>

      <Dropdown.Menu className="language-selector-menu">
        <Dropdown.Item onClick={() => changeLanguage('en')} active={language === 'en'}>
          <GB className="flag-icon" /> English
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('th')} active={language === 'th'}>
          <TH className="flag-icon" /> ไทย
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;