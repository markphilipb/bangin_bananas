import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem calc((50vw - 1000px) / 2);
  z-index: 10;
  font-family: "Courier New";
  letter-spacing: 0.12em;
  top: 0px;
  position: sticky;
  @media screen and (max-width: 740px) {
    height: 50px;
  }
`;

export const NavLink = styled(Link)`
  color: #525252;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;
  .nameLogo {
    font-weight: 700;
    @media screen and (max-width: 740px) {
      font-size: 15px;
    }
  }
  ${
    "" /* &.active {
    color: #15cdfc;
  } */
  }
  &:hover {
    color: #01bf71;
    transition: 0.2 ease-in-out;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #525252;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
