import React from 'react';
import styled from 'styled-components';
import TagSearch from './TagSearch';
import TitleSearch from './TitleSearch';

const SearchForm = ({
    articles = [],
    tagList = [],
    onSubmitInput,
    onSubmitTag,
}) => {
    return (
        <SearchFromContainer>
            <TitleSearch onSubmitInput={onSubmitInput} />
            <TagSearch tagList={tagList} onSubmitTag={onSubmitTag} />
        </SearchFromContainer>
    );
};

const SearchFromContainer = styled.div`
    margin: 30px auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default SearchForm;
