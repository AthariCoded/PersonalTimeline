import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
    }
`;

export const Title = styled.h1`
  padding: 20px;
  text-align: center;
`;

export const TimeDescription = styled.h3`
  padding: 20px;
  text-align: center;
  color: ${(props) => props.theme.subColor};
`;

export const Description = styled.h4`
  padding: 20px;
  text-align: center;
  color: ${(props) => props.theme.subColor};
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const TimelineImage = styled.img`
  margin-bottom: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border: 20px solid ${(props) => props.theme.mainBorderColor};
  border-radius: 15px;
`;

export const TimelineWrapper = styled.div`
  padding: 20px;
  display: block;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border: 10px solid ${(props) => props.theme.subBorderColor};
  border-radius: 15px;
  margin-top: 50px;
`;

export const EventWrapper = styled.div`
  font: bold 20px Verdana, Geneva, Sans-serif;
  margin-left: 200px;
  margin-right: 200px;
  img {
    width: 200px;
    height: 200px;
    &:hover {
      width: 60%;
      height: 60%;
    }
  }
  text-align: center;
  p {
    &.data-event {
      color: ${(props) => props.theme.subColor};
      background-color: ${(props) => props.theme.subBackgroundColor};
    }
  }
`;
