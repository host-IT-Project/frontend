import * as React from "react";
import Chip from "@mui/material/Chip";
import { StyledPaper, StyledListItem } from "./TagArrayStyle";

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
        <StyledListItem key={data.key}>
          <Chip label={data.label} component="a" href={data.href} clickable />
        </StyledListItem>
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
