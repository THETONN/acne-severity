/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import CallHeader from "./components/Header/Header";
import LanguageProvider from "./components/contexts/LanguageContext";
import AboutUs from "./components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import AnalysisPage from "./components/AnalysisPage/AnalysisPage";
import Copyright from "./components/Footer/Footer";
import Navigation from "./components/NavMenu/Navigation";
import { ParallaxProvider } from 'react-scroll-parallax';
import SkinInfo from "./components/SkinInfo/SkinInfo";

function App() {
  return (
    <ParallaxProvider>
      <LanguageProvider>
        <div className="App">
          <Navigation />
          <div id="home">
            <CallHeader />
          </div>
          <main>
            <div id="about">
              <AboutUs />
            </div>
            <div id="skin-info">
              <SkinInfo />
            </div>
            <div id="demo">
              <AnalysisPage />
            </div>
            <Copyright />
          </main>
        </div>
      </LanguageProvider>
    </ParallaxProvider>
  );
}

export default App;