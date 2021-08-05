import styled from "styled-components";

type InputProps = {
  isFocus?: boolean;
};

export const InputContainer = styled.div`
  max-width: 500px;
  min-width: 250px;
  height: 5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;

export const Input = styled.span`
  position: relative;
  margin: 1em;
  width: calc(100% - 2em);
  height: 80px;
`;

export const InputField = styled.input`
  position: absolute;
  margin: 0.8em 0;
  padding: 0.4em;
  width: 100%;
  height: calc(100% - 1.6em);
  border: none;
  border-radius: 0;
  background: transparent;
  color: #ee3769;
  font-size: 1.55em;
  font-weight: bold;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled.label<InputProps>`
  position: absolute;
  padding: 0 1em;
  margin: 1.2em 0;
  width: 100%;
  height: calc(100% - 2.4em);
  color: #6a7989;
  font-weight: bold;
  font-size: 70.25%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: text;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #6a7989;
    transition: transform 0.3s;
  }

  &::before {
    top: 0;
    transform: ${(props) => (props.isFocus ? "translateY(-0.5em)" : "")};
  }

  &::after {
    bottom: 0;
    transform: ${(props) => (props.isFocus ? "translateY(0.5em)" : "")};
  }
`;

export const InputLabelContent = styled.span<InputProps>`
  position: relative;
  display: block;
  padding: 1.5em 0;
  width: 100%;
  transition: all 0.3s;
  transform: ${(props) => (props.isFocus ? "translate3d(0, -90%, 0)" : "")};
  color: ${(props) => (props.isFocus ? "#ee3769" : "#6a7989")};
`;
