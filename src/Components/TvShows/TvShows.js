import React from "react";
import LanguageContext from "../../context/languageContext";

import { TvShowContainer, Image } from "./stylesComponents";

const MenuContent = {
  FR: {
    images1: "images/tv-shows/french/a.webp",
    images2: "images/tv-shows/french/b.jpg",
  },
  DE: {
    images1: "images/tv-shows/german/a.jpg",
    images2: "images/tv-shows/german/b.webp",
  },
  RU: {
    images1: "images/tv-shows/russian/a.jpg",
    images2: "images/tv-shows/russian/b.jpg",
  },
  ES: {
    images1: "images/tv-shows/spanish/a.jpg",
    images2: "images/tv-shows/spanish/b.webp",
  },
  CN: {
    images1: "images/tv-shows/chinese/a.jpg",
    images2: "images/tv-shows/chinese/b.jpg",
  },
};

const TvShows = () => {
  const getTvShow = (activeLanguage) => {
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
        const { images1, images2 } = getTvShow(activeLanguage);
        return (
          <TvShowContainer>
            <Image src={images1} alt="movie" />
            <Image src={images2} alt="movie" />
          </TvShowContainer>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export default TvShows;
