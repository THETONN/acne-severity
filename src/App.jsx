// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import CallHeader from "./components/Header/Header";
import LanguageProvider from "./components/contexts/LanguageContext";
import AboutUs from "./components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import AnalysisPage from "./components/AnalysisPage/AnalysisPage";
import Copyright from "./components/Footer/Footer";
import Navigation from "./components/NavMenu/Navigation";

function App() {
  return (
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
          <div id="demo">
            <AnalysisPage />
          </div>
          <Copyright />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
