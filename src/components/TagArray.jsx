import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const TagArray = ({ tags }) => (
  <Paper
    sx={{
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      p: 0.5,
      m: 0,
    }}
    component="ul"
  >
    {tags.map((data) => {
      // data : { key: 0, label: "Angular", href: "src" },
      return (
        <ListItem key={data.key}>
          {console.log(data.key)}
          <Chip label={data.label} component="a" href={data.href} clickable />
        </ListItem>
      );
    })}
  </Paper>
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
