import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userSelector } from "../../atom/userAtom";

import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/img/logo.png";

const navItems = [
  { name: "아카이브", url: "/archive" },
  { name: "마이페이지", url: "/mypage" },
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <StyledDrawer
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <Logo
        onClick={() => {
          navigate("/home");
        }}
        style={{ margin: "2rem auto" }}
      >
        <img src={logo} alt="호잇" />
      </Logo>
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
            <ListItemButton>
              <span className="drawer-nav">{item.name}</span>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem
          disablePadding
          onClick={() => {
            if (!user.isLogin) {
              navigate("/login");
            } else {
              navigate("/logout");
            }
          }}
        >
          <ListItemButton>
            {!user.isLogin ? (
              <span className="drawer-nav">로그인</span>
            ) : (
              <span className="drawer-nav">로그아웃</span>
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </StyledDrawer>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <StyledHeader>
      <StyledAppBar component="nav">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{
            ml: 1,
            display: {
              sm: "none",
            },
          }}
          size="large"
        >
          <MenuIcon fontSize="inherit" />
        </IconButton>
        <Logo
          onClick={() => {
            navigate("/home");
          }}
        >
          <img src={logo} alt="호잇" />
        </Logo>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            flexGrow: 1,
          }}
        >
          {navItems.map((item) => (
            <NavButton
              key={Math.random() + Date.now()}
              onClick={() => {
                navigate(`${item.url}`);
              }}
            >
              {item.name}
            </NavButton>
          ))}
        </Box>
        {!user.isLogin ? (
          <NavButton
            style={{
              fontSize: "0.8em",
              fontWeight: "lighter",
            }}
            sx={{
              display: { xs: "none", sm: "inline-block" },
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </NavButton>
        ) : (
          <NavButton
            style={{
              fontSize: "0.8em",
              fontWeight: "lighter",
            }}
            sx={{
              display: { xs: "none", sm: "inline-block" },
            }}
            onClick={() => {
              navigate("/logout");
            }}
          >
            로그아웃
          </NavButton>
        )}
      </StyledAppBar>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 64px;
  min-height: 80px;
  background-color: white;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.6em;
  font-weight: bold;
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.colors.body};
  color: inherit;
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  min-height: inherit;
`;

const NavButton = styled(Button)`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
`;

const Logo = styled.div`
  margin: 0 2em;
  width: 7rem;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledDrawer = styled(Box)`
  .drawer-nav {
    margin: 1.5rem auto;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6em;
    font-weight: bold;
  }
`;

export default Header;
