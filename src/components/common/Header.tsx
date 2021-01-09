import * as React from 'react';
import {Link as ReactRouterDomLink, useLocation} from 'react-router-dom';
import styled, {css, ThemeContext} from "styled-components";
import {useContext, useState} from "react";
import {Toggle} from "./Toggle";


const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, ${p=>p.theme.primaryColor}, ${p=>p.theme.secondaryColor});
  border-bottom: 3px solid ${p=>p.theme.secondaryColor};
`
type MenuProps = {
    menuOpen: boolean
};

const Menu = styled.nav<MenuProps>`
  display: ${p => p.menuOpen ? "block" : "none"};
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  border-bottom: 3px solid ${p=>p.theme.secondaryColor};
  background: ${p=> p.theme.bodyBackgroundColor};

  @media (min-width: 767px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
  }
`
type StyledLinkProps = {
    isActive?: boolean
    to: string
};

const Link: React.FC<StyledLinkProps> = ({isActive, children, ...props}) => {
    return (<>
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    </>)
}

const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  padding: 4px 8px;
  display: block;
  color: ${p=> p.theme.bodyFontColor};
  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
  font-weight: ${p => p.isActive ? "900" : "400"};
`

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-height: 25px;
  padding: 5px;

  > div {
    height: 3px;
    background: ${p => p.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 767px) {
    display: none;
  }
`

export function Header() {
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const {id, setTheme} = useContext(ThemeContext);
    return (
        <HeaderWrapper>
            <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
                <div/>
                <div/>
                <div/>
            </MobileMenuIcon>
            <Menu menuOpen={menuOpen}>
                <StyledLink to={"/"} isActive={pathname === "/"}>Home</StyledLink>
                <StyledLink to={"/login"} isActive={pathname === "/login"}>Login</StyledLink>
                <Toggle isActive={id ==="dark"} onToggle={setTheme}/>
            </Menu>

        </HeaderWrapper>
    );
}

type HeaderPropsType = {};