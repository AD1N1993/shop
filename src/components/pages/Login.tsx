import * as React from 'react';
import {Button, Input, PageLayout, PasswordInput,  Spinner} from "../common";
import styled from "styled-components";
import {ChangeEvent, useEffect, useState} from "react";


const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: #e7fdd8;
  border: 2px solid #ec731a;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
  padding: 5px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`

let timeout: NodeJS.Timeout;

export function Login(props: Props) {
    console.log("render")
    const [formFields, setFormFields] = useState({userName: "", password: ""});
    const [loading, setLoading] = useState(false);

    let handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setFormFields(s => ({
            ...s, [e.target.name]: e.target.value
        }))

    };
    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        console.log(formFields)
    };

    useEffect(() => {
        return () => {
            if (timeout) clearTimeout(timeout);
        }
    }, [])
    return (
        <PageLayout>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                {loading
                    ? <Spinner/>
                    : <>
                        <Input name={"userName"}
                               placeholder={"User name"}
                               onChange={handleInputChange}
                               value={formFields.userName}
                               type={"text"}
                        />
                        <PasswordInput
                            name={"password"}
                            onChange={handleInputChange}
                            value={formFields.password}
                        />
                    </>
                }

                <Button large type={"submit"} disabled={loading}> {loading ? "loading..." : "Login"}</Button>
                {!loading &&
				<>
				  <div className={"alt-text"}>or</div>
				  <Button secondary type={"button"}>Register</Button>
				</>
                }

            </Form>
        </PageLayout>
    );
};
type Props = {};