import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  height: 80px;
  padding: 20px 0;
  box-shadow: 0px 5px 5px 2px rgba(26, 22, 22, 0.49);
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  filter: invert();
  transform: translatey(-5px);
`;

export const RouteButton = styled.a`
  position: absolute;
  top: 0;
  right: 20px;
  bottom: 0;
  margin: auto;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #ee3769;
  border-radius: 8px;
  height: 2.8em;
  width: 10em;
  padding: 0;
  outline: none;
  overflow: hidden;
  color: #ee3769;
  transition: color 0.3s 0.1s ease-out;
  text-align: center;
  line-height: 250%;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: "";
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    line-height: 20em;
    left: -5em;
    text-align: center;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  &:hover {
    color: #fff;

    &::before {
      box-shadow: inset 0 0 0 10em #ee3769;
    }
  }
`;
