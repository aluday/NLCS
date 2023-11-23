import React from "react";
import ButtonComponent from "../../shared-components/Button";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperPriceText,
} from "./CardWrapper";
import image from "../../../assets/test.png";

export const CardProduct = ({ product, handleClick }) => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "300px", height: "200px" }}
      style={{ width: 300, padding: "10px" }}
      bodyStyle={{ padding: "10px" }}
      cover={<img alt="example" src={image} />}
    >
      <div className="card">
        <StyleNameProduct> {product.productName} </StyleNameProduct>
        <WrapperPriceText style={{ padding: "5px" }}>
          <span style={{ marginRight: "8px" }}>{ product.basicPrice.toLocaleString() } đ</span>
        </WrapperPriceText>
        <ButtonComponent textButton="Thêm vào giỏ hàng" onClick={handleClick}>
        </ButtonComponent>
      </div>
    </WrapperCardStyle>
  );
};

export default CardProduct;
