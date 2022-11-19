import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteArticle } from "../api/article";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 100,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const MoreMenu = ({ id }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClose();
    navigate(`/edit?id=${id}`);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "정말 삭제하시겠습니까?\n한번 삭제한 문서는 복구가 불가능합니다."
    );
    if (confirmDelete === true) {
      (async function _deleteArticle() {
        await deleteArticle(id);
      })();
      window.alert("삭제되었습니다.");
      window.location.replace("/mypage");
    }
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="more-horiz"
        aria-controls={open ? "menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon fontSize="large" />
      </IconButton>
      <StyledMenu
        id="menu"
        MenuListProps={{
          "aria-labelledby": "button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem sx={{ fontSize: 14 }} onClick={handleEdit} disableRipple>
          <EditIcon />
          수정
        </MenuItem>
        <MenuItem sx={{ fontSize: 14 }} onClick={handleDelete} disableRipple>
          <DeleteIcon />
          삭제
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default MoreMenu;
