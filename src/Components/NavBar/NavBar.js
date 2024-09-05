import React from "react";
import Menu from "../Menu/Menu";
import LanguageContext from "../../context/languageContext";
import {
  NavBarContainer,
  LanguageSelect,
  LanguageOptionsContent,
} from "./StylesComponents";

const LanguageOptions = [
  { id: 1, value: "FR", language: "French" },
  { id: 2, value: "DE", language: "German" },
  { id: 3, value: "RU", language: "Russian" },
  { id: 4, value: "ES", language: "Spanish" },
  { id: 5, value: "CN", language: "Chinese" },
];

const NavBar = () => (
  <LanguageContext.Consumer>
    {(value) => {
      const { activeLanguage, changeLanguage } = value;

      const onChangeLanguage = (event) => {
        changeLanguage(event.target.value);
      };

      return (
        <NavBarContainer>
          <Menu />
          <LanguageSelect value={activeLanguage} onChange={onChangeLanguage}>
            {LanguageOptions.map((eachOption) => (
              <LanguageOptionsContent
                key={eachOption.id}
                value={eachOption.value}
              >
                {eachOption.language}
              </LanguageOptionsContent>
            ))}
          </LanguageSelect>
        </NavBarContainer>
      );
    }}
  </LanguageContext.Consumer>
);

export default NavBar;
