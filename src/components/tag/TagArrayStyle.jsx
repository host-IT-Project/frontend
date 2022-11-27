import { Paper } from "@mui/material";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  padding: 5px;
  display: flex;
  flex-wrap: no-wrap;
  overflow: auto;
  list-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledListItem = styled("li")`
  margin-right: 3px;
`;
