import React from "react";

import { UIInputPropsInterface } from "types/components/uiInput";

import { InputContainer, Input, InputField, InputLabel, InputLabelContent } from "./styles";

const UIInput: React.FC<UIInputPropsInterface> = ({ setValue, label = "Project for tracking", maxLength = 20 }) => {
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

    setValue(inputValue);
    setInputValue("");
  };

  return (
    <InputContainer>
      <Input>
        <InputField
          type="text"
          id="input"
          value={inputValue}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          onKeyPress={(event) => onSendHandler(event.code)}
        />
        <InputLabel isFocus={isFocused} htmlFor="input">
          <InputLabelContent isFocus={isFocused}>{label}</InputLabelContent>
        </InputLabel>
      </Input>
    </InputContainer>
  );
};

export default React.memo(UIInput);
