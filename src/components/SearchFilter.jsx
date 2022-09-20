import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';

const SearchFilter = ({
    isRow,

    // 18번줄은 지역변수로 테스트하기 위해 주석처리함
    // query, handleChange
}) => {
    const [query, setQuery] = useState({
        label: '프로젝트분류',
        options: {
            한이음: false,
            프로보노: true,
            이브와: false,
            스마트해상물류: true,
        },
        min: 0,
        max: 1,
    });

    const handleChange = (event) => {
        setQuery((oldQuery) => ({
            ...oldQuery,
            options: {
                ...oldQuery.options,
                [event.target.name]: event.target.checked,
            },
        }));
    };

    /**
     * @todo {boolean} error : min, max를 충족하는가?
     */
    // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl
                sx={{
                    m: 3,
                }}
                component="fieldset"
                variant="standard"
            >
                <FormLabel component="legend">{query.label}</FormLabel>
                <FormGroup
                    // error={
                    // error
                    // }
                    sx={{
                        display: 'flex',
                        flexDirection: `${isRow ? 'row' : 'column'}`,
                    }}
                >
                    {Object.keys(query.options).map((label) => (
                        <FormControlLabel
                            key={Math.random() + Math.random()}
                            control={
                                <Checkbox
                                    checked={query.options[label]}
                                    onChange={handleChange}
                                    name={label}
                                />
                            }
                            label={label}
                        />
                    ))}
                </FormGroup>
                {/* <FormHelperText>warning</FormHelperText> */}
            </FormControl>
        </Box>
    );
};

export default SearchFilter;
