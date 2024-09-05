import React from "react";
import LanguageContext from "../../context/languageContext";

import { HomeContainer, Heading, Image } from "./stylesComponents";

const MenuContent = {
  FR: {
    heading: "French",
    images: "images/French.jpg",
  },
  DE: {
    heading: "German",
    images: "images/German.jpg",
  },
  RU: {
    heading: "Russian",
    images: "images/Russian.jpg",
  },
  ES: {
    heading: "Spanish",
    images: "images/Spanish.jpg",
  },
  CN: {
    heading: "Chinese",
    images: "images/Chinese.jpg",
  },
};

const Home = () => {
  const getHomeContent = (activeLanguage) => {
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
        const { heading, images } = getHomeContent(activeLanguage);
        return (
          <HomeContainer>
            <Heading>{heading}</Heading>
            <Image src={images} alt={heading} />
          </HomeContainer>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export default Home;
