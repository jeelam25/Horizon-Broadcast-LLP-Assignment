import React from "react";
import LanguageContext from "../../context/languageContext";
import { Link } from "react-router-dom";
import { MenuContainer, Items } from "./stylesComponents";

const MenuContent = {
  FR: {
    home: "maison",
    movie: "films",
    tvShow: "émissions de télévision",
    sports: "sportive",
    live: "en direct",
  },
  DE: {
    home: "heim",
    movie: "Film",
    tvShow: "Fernsehsendungen",
    sports: "Sport",
    live: "Livin",
  },
  RU: {
    home: "дом",
    movie: "фильмы",
    tvShow: "телешоу",
    sports: "спорт",
    live: "жить",
  },
  ES: {
    home: "hogar",
    movie: "película",
    tvShow: "programas de televisión",
    sports: "deportes",
    live: "vivir",
  },
  CN: {
    home: "家",
    movie: "电影",
    tvShow: " 电视节目",
    sports: "运动的",
    live: "居住",
  },
};

const Menu = () => {
  const getMenuLanguage = (activeLanguage) => {
    switch (activeLanguage) {
      case "FR":
        return MenuContent.FR;
      case "DE":
        return MenuContent.DE;
      case "RU":
        return MenuContent.RU;
      case "ES":
        return MenuContent.ES;
      case "CN":
        return MenuContent.CN;

      default:
        return null;
    }
  };

  return (
    <LanguageContext.Consumer>
      {(value) => {
        const { activeLanguage } = value;
        const { home, movie, tvShow, sports, live } =
          getMenuLanguage(activeLanguage);
        return (
          <MenuContainer>
            <Link to="/">
              <Items>{home}</Items>
            </Link>
            <Link to="/movies">
              <Items>{movie}</Items>
            </Link>
            <Link to="/tv-show">
              <Items>{tvShow}</Items>
            </Link>
            <Link to="/sports">
              <Items>{sports}</Items>
            </Link>
            <Link to="/live">
              <Items>{live}</Items>
            </Link>
          </MenuContainer>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export default Menu;
