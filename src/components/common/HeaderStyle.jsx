import { AppBar, Button } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 64px;
  min-height: 80px;
  background-color: white;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.6em;
  font-weight: bold;
`;

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.colors.body};
  color: inherit;
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  min-height: inherit;
`;

export const StyledNavButton = styled(Button)`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
`;

export const StyledLogo = styled.div`
  margin: 0 2em;
  width: 7rem;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledDrawer = styled(Box)`
  .drawer-nav {
    margin: 1.5rem auto;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6em;
    font-weight: bold;
  }
`;
