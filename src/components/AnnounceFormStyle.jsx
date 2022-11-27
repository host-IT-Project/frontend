import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0px auto;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.gmarketSans};

  .icon-announce {
    font-size: 6rem;
    margin: 20px 0;
  }

  .text-message {
    font-size: 2.4rem;
    margin-bottom: 10px;
  }

  .text-description {
    font-size: 1.6rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.middlegray};
  }
`;
