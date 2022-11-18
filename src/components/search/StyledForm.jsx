import React from 'react';
import styled from 'styled-components';

const StyledForm = (props) => {
    const transformedProps = { ...props };
    delete transformedProps.children;
    return <StyledForm_ {...transformedProps}>{props.children}</StyledForm_>;
};

const StyledForm_ = styled.form`
    width: 350px;
    border-radius: 30px;
    .MuiFormControl-root,
    .MuiAutocomplete-root,
    .MuiInputBase-root {
        border-radius: inherit;
    }
`;

export default StyledForm;
