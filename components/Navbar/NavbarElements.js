import styled from "styled-components";

export const Nav = styled.nav`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem calc((50vw - 1000px) / 2);
  z-index: 10;
  font-family: "Regular";
  letter-spacing: 0.12em;
  top: 0px;
  position: sticky;
`;

export const BananaLogo = styled.img`
  width: 75px;
  margin-top: 2px;
`;

export const ConnectButton = styled.button`
  font-family: "Regular";
  font-size: 60px;
  background: transparent;
  border-radius: 15px;
  border: 5px solid #000;
  color: #000;
  margin: auto;
  padding-top: 10px;
  
  cursor: pointer;
  }
`;

export const TwitterIcon = styled.img`
  fill: #fff;
  margin: 10px;
  .icon:hover {
    fill: #01bf71;
    transition: 0.2 ease-in-out;
  }
`;

export const DiscordIcon = styled.img`
  margin: 10px;
  color: #000;
`;

export const OpenseaIcon = styled.img`
  margin: 10px;
  filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7500%)
    hue-rotate(327deg) brightness(96%) contrast(104%);
`;

export const NavItems = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: space-between;
`;

export const SocialIcons = styled.div`
  padding-right: 20px;
  padding-top: 13px;
`;
