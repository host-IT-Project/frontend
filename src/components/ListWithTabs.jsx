import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductCardList from './ProductCardList';
import styled from 'styled-components';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ListWithTabs = ({ cardData }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyleOverride sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="탐색" {...a11yProps(0)} />
                    <Tab label="최신순" {...a11yProps(1)} />
                    <Tab label="조회순" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ProductCardList cardData={cardData} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ProductCardList cardData={cardData} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ProductCardList cardData={cardData} />
            </TabPanel>
        </StyleOverride>
    );
};

const StyleOverride = styled(Box)`
    .css-19kzrtu {
        padding: 0;
    }
    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
        color: gray;
    }
    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
        color: black;
    }
    .css-1aquho2-MuiTabs-indicator {
        background-color: black;
    }
`;

export default ListWithTabs;
