import React from "react";
import LanguageContext from "../../context/languageContext";

import { MovieContainer, Image } from "./stylesComponents";

const MenuContent = {
  FR: {
    images1: "images/movies/french/a.jpg",
    images2: "images/movies/french/b.jpg",
    images3: "images/movies/french/c.jpg",
  },
  DE: {
    images1: "images/movies/german/a.jpg",
    images2: "images/movies/german/b.jpg",
    images3: "images/movies/german/c.jpg",
  },
  RU: {
    images1: "images/movies/russian/a.jpg",
    images2: "images/movies/russian/b.webp",
    images3: "images/movies/russian/c.jpg",
  },
  ES: {
    images1: "images/movies/spanish/a.png",
    images2: "images/movies/spanish/b.png",
    images3: "images/movies/spanish/c.jpeg",
  },
  CN: {
    images1: "images/movies/chinese/a.jpeg",
    images2: "images/movies/chinese/b.jpeg",
    images3: "images/movies/chinese/c.jpeg",
  },
};

const Movies = () => {
  const getMovieContent = (activeLanguage) => {
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
        const { images1, images2, images3 } = getMovieContent(activeLanguage);
        return (
          <MovieContainer>
            <Image src={images1} alt="movie" />
            <Image src={images2} alt="movie" />
            <Image src={images3} alt="movie" />
          </MovieContainer>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export default Movies;
