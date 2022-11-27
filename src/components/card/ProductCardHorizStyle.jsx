import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";

export const StyledCard = styled(Card)`
  display: flex;

  img {
    max-height: 183px;
    max-width: 250px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    img {
      max-height: 300px;
      max-width: 100%;
    }
  }
`;

export const StyledCardContent = styled(CardContent)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
