import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TagArray from "./TagArray";

const ProductCard = ({ thumbnailUrl, title, description, tags }) => (
  <Card sx={{ maxWidth: 345, borderRadius: "15px" }}>
    <CardMedia component="img" alt={title} height="200" image={thumbnailUrl} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <TagArray tags={tags} />
  </Card>
);

ProductCard.defaultProps = {
  thumbnail: "https://via.placeholder.com/345x200",
  alt: "비어있는 이미지",
  title: "프로젝트 제목",
  description: "설명",
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

export default ProductCard;
