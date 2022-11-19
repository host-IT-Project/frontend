import React from "react";
import ProductCardHorizontal from "../components/ProductCardHoriz";
import PageTemplate from "../template/PageTemplate";

const MyPage = (props) => {
  return <PageTemplate contents={<ProductCardHorizontal />}></PageTemplate>;
};

export default MyPage;
