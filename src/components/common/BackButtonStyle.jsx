import styled from "styled-components";
import { Button } from "@mui/material";

export const StyledBackButton = styled(Button)`
  margin-bottom: 1rem;
  transition: all 0.5s;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.darkgray};

  &:hover {
    transform: scale(1.05);
  }
`;
