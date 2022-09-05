import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 100%;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.text};
`;

const Header = () => <StyledHeader />;

export default Header;
