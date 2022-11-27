import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  margin-left: auto;
  width: fit-content;
  position: fixed;
  right: 20px;
  bottom: 20px;
  left: 10px;
  z-index: 99999;
  border-radius: 100px;
  font-size: 1.6rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;
