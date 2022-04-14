import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ColorPalette, FontSize, Spacing, zIndex } from "../../config/style";
import { ReactComponent as InputBordersImg } from "../../images/input.svg";

export enum InputType {
  text = "text",
  number = "number",
  password = "password",
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  position: relative;
  top: 12px;
  width: fit-content;
  max-width: 80%;
  margin-left: ${Spacing[11]};
  padding: ${Spacing[2]} ${Spacing[8]} ${Spacing[12]};
  background: ${ColorPalette.black};
  color: ${ColorPalette.darkerBackground};
  border-radius: 15px 15px 0 0;
  transition: background 0.2s ease-in, margin-left 0.6s ease-in,
    top 0.8s ease-in;

  ${({ $isFocused, $hasError }: { $isFocused: boolean; $hasError: boolean }) =>
    css`
      ${$isFocused &&
      `
        top: 6px;
        margin-left:  ${Spacing[50]};
        background: ${ColorPalette.primary};
      `}
      ${$hasError &&
      ` top: 6px;
        margin-left:  ${Spacing[50]};
        background: ${ColorPalette.error};
      `}
    `};
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: ${zIndex.positive};
`;

const InputBorders = styled(InputBordersImg)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  fill: ${ColorPalette.darkerBackground};
  z-index: ${zIndex.negative};

  path {
    transition: stroke 0.2s ease-in;
    stroke: ${ColorPalette.black};

    ${({
      $hasError,
      $isFocused,
    }: {
      $hasError: boolean;
      $isFocused: boolean;
    }) =>
      css`
        ${$hasError &&
        `
          stroke: ${ColorPalette.error};
        `}

        ${$isFocused &&
        `
          stroke: ${ColorPalette.primary};
        `}
      `}
  }
`;

const Input = styled.input`
  background: none;
  border: none;
  padding: ${Spacing[18]} ${Spacing[14]};
  width: 100%;
  font-size: ${FontSize[18]};

  :focus {
    outline: none;
  }
`;

const ErrorMessage = styled.span`
  color: ${ColorPalette.error};
  text-align: right;
`;

interface FormInputProps {
  inputType?: InputType;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string | null;
  required?: boolean;
}

const FormInput = ({
  inputType = InputType.text,
  label,
  name,
  onChange,
  required = false,
  errorMessage = null,
}: FormInputProps) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <MainContainer>
      <Label
        $isFocused={isInputFocused}
        $hasError={!!errorMessage && !isInputFocused}
      >
        {label}
      </Label>
      <InputContainer>
        <InputBorders
          $hasError={!!errorMessage && !isInputFocused}
          $isFocused={isInputFocused}
        />
        <Input
          name={name}
          type={inputType}
          onFocus={() => setIsInputFocused(true)}
          onBlur={(e) => {
            setIsInputFocused(false);
          }}
          onChange={(e) => onChange(e)}
          required={required}
        />
      </InputContainer>
      {errorMessage && !isInputFocused && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </MainContainer>
  );
};

export default FormInput;
