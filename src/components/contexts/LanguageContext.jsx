// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import en from '../locales/en';
import th from '../locales/th';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [texts, setTexts] = useState(en);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setTexts(lang === 'en' ? en : th);
  };

  return (
    <LanguageContext.Provider value={{ language, texts, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
