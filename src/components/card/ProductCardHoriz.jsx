import * as React from "react";

import { useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import TagArray from "../tag/TagArray";
import MoreMenu from "../common/MoreMenu";
import {
  StyledBox,
  StyledCard,
  StyledCardContent,
} from "./ProductCardHorizStyle";

const ProductCardHoriz = ({
  thumbnailUrl,
  title,
  description,
  tags,
  articleId,
  createdAt,
}) => {
  const navigate = useNavigate();
  const date = {
    year: createdAt && createdAt[0],
    month: createdAt && createdAt[1],
    day: createdAt && createdAt[2],
  };

  return (
    <StyledCard sx={{ display: "flex", borderRadius: 5 }}>
      <CardMedia
        component="img"
        image={thumbnailUrl}
        alt={title}
        onClick={() => navigate(`/project/${articleId}`)}
      />
      <StyledCardContent>
        <StyledBox>
          <Box>
            <Typography
              gutterBottom
              variant="h4"
              component="h3"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => navigate(`/project/${articleId}`)}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              mb={1}
              color="text.secondary"
            >
              {date.year}.{date.month}. {date.day}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              mb={1}
            >
              {description}
            </Typography>
          </Box>
          <MoreMenu articleId={articleId} />
        </StyledBox>
        <Divider variant="fullWidth" sx={{ mb: 1 }} />
        <TagArray
          tags={tags.length > 5 ? tags.slice(0, 5) : tags}
          p={0}
          elevation={0}
        />
      </StyledCardContent>
    </StyledCard>
  );
};

ProductCardHoriz.defaultProps = {
  image: "https://via.placeholder.com/345x200",
  alt: "비어있는 이미지",
  title: "프로젝트 제목",
  description: "설명",
  createdAt: "2022-00-00T05:21:13",
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
    {
      key: 2,
      label: "태그2",
      href: "#",
    },
    {
      key: 3,
      label: "태그2",
      href: "#",
    },
    {
      key: 4,
      label: "태그2",
      href: "#",
    },
    {
      key: 5,
      label: "태그2",
      href: "#",
    },
  ],
};

export default ProductCardHoriz;
