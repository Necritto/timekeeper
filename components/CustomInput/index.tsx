import React from "react";

import { CustomInputProps } from "types/customInput";

import { InputContainer, Input, InputField, InputLabel, InputLabelContent } from "./styles";

const CustomInput: React.FC<CustomInputProps> = ({ setProjectTitle }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = () => {
    if (!!inputValue) return;

    setIsFocused(false);
  };

  const onSendHandler = (code: string) => {
    if (code !== "Enter") return;
    if (inputValue.trim() === "") return;

    setProjectTitle(inputValue);
    setInputValue("");
  };

  return (
    <InputContainer>
      <Input>
        <InputField
          type="text"
          id="input"
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          onKeyPress={(event) => onSendHandler(event.code)}
        />
        <InputLabel isFocus={isFocused} htmlFor="input">
          <InputLabelContent isFocus={isFocused}>Проект для трекинга</InputLabelContent>
        </InputLabel>
      </Input>
    </InputContainer>
  );
};

export default React.memo(CustomInput);
