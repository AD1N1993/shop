import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";
import LightTheme from "../themes/light"
import DarkTheme, {ThemeProps} from "../themes/dark"

const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`

  body {
    background: ${p => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${p => p.theme.bodyFontColor};
    font-family: 'Kaushan Script', sans-serif;
  }
`


function App() {
    const [theme, setTheme] = useState(LightTheme);
    return (
        <ThemeProvider theme={{
            ...theme, setTheme: () => {
                setTheme(s => s.id === 'light' ? DarkTheme : LightTheme)
            }
        }}>
            <GlobalStyle/>
            <Switch>
                <Route path={"/login"}><Login/></Route>
                <Route path={"/"}><Home/></Route>
            </Switch>
        </ThemeProvider>

    );
}

export default App;
