import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px 20px 50px;
  background-color: #fdf6f6;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const LanguageSelect = styled.select`
  padding: 10px 20px 10px 20px;
  border: 0px;
  outline: none;
  height: 100%;
  font-family: "Robot";
  font-size: 22px;
  color: #002c54;
`;

export const LanguageOptionsContent = styled.option`
  font-family: "Robot";
  font-size: 22px;
  color: #002c54;
`;
