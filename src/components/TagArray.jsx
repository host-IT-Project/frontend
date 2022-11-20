import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const StyledPaper = styled(Paper)`
  display: flex;
  flex-wrap: no-wrap;
  overflow: auto;
  list-style: none;

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 70%
    );
    width: 60px;
    height: 48px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TagArray = ({ tags, p = 0.5, elevation }) => (
  <StyledPaper
    elevation={elevation}
    sx={{
      p: p,
    }}
    component="ul"
  >
    {tags.map((data) => {
      // data : { key: 0, label: "Angular", href: "src" },
      return (
        <ListItem key={data.key}>
          <Chip label={data.label} component="a" href={data.href} clickable />
        </ListItem>
      );
    })}
  </StyledPaper>
);

TagArray.defaultProps = {
  tags: [
    {
      key: 0,
      label: "태그1",
      href: "#",
    },
    {
      key: 1,
      label: "태그2",
      href: "#",
    },
  ],
};

export default TagArray;
