import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledInfoContainer = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;

  .title {
    margin-bottom: 1.6rem;
    font-weight: bold;
    font-size: 2.5rem;
  }
  .info-text {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.darkgray};
  }
  .info-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    span {
      font-size: 1.4rem;
    }
  }
  .button {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;

    .container-button {
      align-self: flex-end;
    }

    .button:nth-child(2) {
      display: none;
    }
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  word-break: keep-all;
`;
