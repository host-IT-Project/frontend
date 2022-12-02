import { Menu } from "@mui/material";
import styled from "styled-components";

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    border-radius: 6px;
    min-width: 100px;
    color: rgb(55, 65, 81);
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    .MuiMenu-list {
      padding: "4px 0";
    }

    .MuiMenuItem-root {
      .MuiSvgIcon-root {
        margin-right: theme.spacing(1.5);
        font-size: 1.8rem;
      }
      &:active {
      }
    }
  }
`;
