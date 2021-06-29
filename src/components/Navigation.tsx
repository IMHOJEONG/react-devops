import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const activeStyle = {
    color: "#09D3AC",
};

type activeType = {
    active: boolean;
};

const defaultStyle = {
    textDecoration: "none",
    color: "black",
    padding: "20px"
    
};

const Navigation = () => {

    const CustomContainer = styled.div<activeType>`
  background: ${props => {
            return props.theme.color.main;
        }};

  color: ${props => {
            if (props.active) {
                return "white";
            }
            return "#eee";
        }};
        
   font-weight: 600;
   text-align:center;
`;

    return (
        <div className="navigation">
            <CustomContainer active>
                <span> This is react-devops Test page! </span>
            </CustomContainer>
            <NavLink to="/" activeStyle={activeStyle} exact style={defaultStyle}>
                Home
            </NavLink>
            <NavLink to="/about" activeStyle={activeStyle} exact style={defaultStyle}>
                About
            </NavLink>
            <NavLink to="/contact" activeStyle={activeStyle} exact style={defaultStyle}>
                Contact
            </NavLink>
        </div>
    );
}

export default Navigation;