import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteArticle } from "../../api/article";
import { StyledMenu } from "./MoreMenuStyle";

const menuSettings = {
  elevation: 0,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  MenuListProps: {
    "aria-labelledby": "button",
  },
};

const MoreMenu = ({ articleId }) => {
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
    navigate(`/edit?id=${articleId}`);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "정말 삭제하시겠습니까?\n한번 삭제한 문서는 복구가 불가능합니다."
    );
    if (confirmDelete === true) {
      (async function _deleteArticle() {
        await deleteArticle(articleId.toString());
      })();
      window.alert("삭제되었습니다.");
      window.location.replace("/mypage");
    }
    handleClose();
  };

  return (
    <>
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
        {...menuSettings}
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
    </>
  );
};

export default MoreMenu;
