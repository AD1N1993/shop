import * as React from 'react';
import {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {Input} from "./Input";


const PasswordInputWrapper = styled.div`
  display: flex;
  ~div{
    margin-bottom: 8px;
  }
`

const PasswordInputStyled = styled(Input).attrs(() => ({
    type: "password",
    placeholder: 'Password'
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #fff;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`

export function PasswordInput(props: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(true);
    const typePasswordInput = showPassword;
    return (<>
            <PasswordInputWrapper>
                <PasswordInputStyled {...props}    />
                <ToggleButton onClick={()=> setShowPassword(s=>!s)}>
                    {showPassword ? "show" : "hide"}
                </ToggleButton>
            </PasswordInputWrapper>

            <div>{showPassword ? props.value : ""}</div>
        </>

    );
}

type PasswordInputProps = {
    name: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
};
