import React from "react";

const LanguageContext = React.createContext({
  activeLanguage: "FR",
  changeLanguage: () => {},
});

export default LanguageContext;
