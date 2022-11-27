import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userSelector } from "../../atom/userAtom";

import {
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

import {
  StyledLogo,
  StyledNavButton,
  StyledAppBar,
  StyledDrawer,
  StyledHeader,
} from "./HeaderStyle";

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
      <StyledLogo
        onClick={() => {
          navigate("/home");
        }}
        style={{ margin: "2rem auto" }}
      >
        <img src={logo} alt="호잇" />
      </StyledLogo>
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
        <StyledLogo
          onClick={() => {
            navigate("/home");
          }}
        >
          <img src={logo} alt="호잇" />
        </StyledLogo>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            flexGrow: 1,
          }}
        >
          {navItems.map((item) => (
            <StyledNavButton
              key={Math.random() + Date.now()}
              onClick={() => {
                navigate(`${item.url}`);
              }}
            >
              {item.name}
            </StyledNavButton>
          ))}
        </Box>
        {!user.isLogin ? (
          <StyledNavButton
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
          </StyledNavButton>
        ) : (
          <StyledNavButton
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
          </StyledNavButton>
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

export default Header;
