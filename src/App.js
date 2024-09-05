import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import LanguageContext from "./context/languageContext";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import TvShows from "./Components/TvShows/TvShows";
import Sports from "./Components/Sports/Sports";
import Live from "./Components/Live/Live";

class App extends Component {
  state = { activeLanguage: "FR" };
  changeLanguage = (activeLanguage) => {
    this.setState({ activeLanguage });
  };
  render() {
    const { activeLanguage } = this.state;
    return (
      <LanguageContext.Provider
        value={{
          activeLanguage,
          changeLanguage: this.changeLanguage,
        }}
      >
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/tv-show" element={<TvShows />} />
          <Route exact path="/sports" element={<Sports />} />
          <Route exact path="/live" element={<Live />} />
        </Routes>
      </LanguageContext.Provider>
    );
  }
}

export default App;
