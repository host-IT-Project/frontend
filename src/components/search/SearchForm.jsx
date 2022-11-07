import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchFromContainer = styled.div`
    margin: 30px auto;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 350px;
    }
`;

const SearchForm = ({
    articles = [],
    tagList = [],
    onSubmitInput,
    onSubmitTag,
}) => {
    const [input, setInput] = useState();

    return (
        <SearchFromContainer>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitInput && onSubmitInput(input);
                }}
            >
                <TextField
                    sx={{
                        width: '100%',
                    }}
                    label="제목 검색"
                    type="search"
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
            </form>
            <form>
                <Autocomplete
                    sx={{
                        width: '100%',
                        marginTop: '13px',
                    }}
                    onChange={(event, value) => {
                        onSubmitTag(value);
                    }}
                    multiple
                    id="tags-standard"
                    options={tagList}
                    getOptionLabel={(tag) => tag}
                    defaultValue={[]}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="태그 검색"
                            placeholder="컴퓨터 공학과의 작품 전시회는 '컴퓨터공학과' 태그로 확인하실 수 있어요"
                        />
                    )}
                />
            </form>
        </SearchFromContainer>
    );
};

export default SearchForm;
