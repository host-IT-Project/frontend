import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.gmarketSans};

  .icon-announce {
    font-size: 6rem;
    margin: 20px 0;
  }

  .text-title {
    font-size: 2.4rem;
    margin-bottom: 10px;
  }

  .text-description {
    font-size: 1.6rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.middlegray};
  }
`;

const AnnounceForm = ({ title, description }) => (
  <StyledContainer>
    <ErrorOutlineIcon className="icon-announce" color="disabled" />
    <p className="text-title">{title}</p>
    {description && <p className="text-description">{description}</p>}
  </StyledContainer>
);

export default AnnounceForm;
