import React from 'react';
import styled from 'styled-components';

const StyledForm = ({ children }) => <StyledFrom_>{children}</StyledFrom_>;

const StyledFrom_ = styled.form`
    width: 350px;
    border-radius: 30px;
    .MuiFormControl-root,
    .MuiAutocomplete-root,
    .MuiInputBase-root {
        border-radius: inherit;
    }
`;

export default StyledForm;
