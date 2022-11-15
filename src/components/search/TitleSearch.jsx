import React, { useState } from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import StyledForm from './StyledForm';

const TitleSearch = ({ onSubmitInput }) => {
    const [input, setInput] = useState();

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                onSubmitInput && onSubmitInput(input);
            }}
        >
            <StyledTextField
                label="제목 검색"
                type="search"
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
        </StyledForm>
    );
};

const StyledTextField = styled(TextField)`
    width: 100%;
`;

export default TitleSearch;
