import {
    AppBar,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledHeader = styled.div`
    width: 100%;
    height: 64px;
    background-color: ${({ theme }) => theme.colors.text};
`;

const drawerWidth = 240;
const navItems = [
    { name: '공모전', url: '/contest' },
    { name: '아카이브', url: '/archive' },
    { name: '마이페이지', url: '/mypage' },
];

const Header = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                호잇
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={Math.random() + Date.now()}
                        onClick={() => {
                            navigate(item.url);
                        }}
                        disablePadding
                    >
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <StyledHeader>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: {
                                sm: 'none',
                            },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                width: '3rem',
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}
                            onClick={() => {
                                navigate('/home');
                            }}
                        >
                            호잇
                        </Typography>
                    </div>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={Math.random() + Date.now()}
                                sx={{ color: '#fff' }}
                                onClick={() => {
                                    navigate(`${item.url}`);
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        /**
                         * 메뉴 클릭이 먹히지 않으면 주석처리 해주세요
                         */
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </StyledHeader>
    );
};

export default Header;
