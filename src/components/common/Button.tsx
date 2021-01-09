import styled, {css} from "styled-components";

interface ButtonProps {
    secondary?: boolean
    large?: boolean
}

export const Button = styled.button<ButtonProps>`
  color: #ffffff;
  background: ${p => p.secondary ? p=>p.theme.secondaryColor  :  p=>p.theme.primaryColor };
  font-weight: bold;
  ${p => p.large
          ? css`
            padding: 10px;
            border-radius: 5px;
            font-size: 1.5em;
          `
          : css`
            padding: 8px;
            border-radius: 4px;
            font-size: 1em;
          `};
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: normal;
  outline: none;
  cursor: pointer;

  &:disabled {
    background: #eee;
    color: #a4a4a4;
  }

  &:active {
    background: #ff7dd3;
  }

  &:hover {
    background: #fa7575;
  }
`



