import React from "react";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";

export default function Product({ image, label, price, discount, name, containerWidth }) {
  return (
    <div className="m-3" style={{ width: containerWidth ? containerWidth : "150px" }}>
      {/* Label Space */}
      <div
        className="d-flex justify-content-center"
        style={{ width: "150px", height: "150px" }}
      >
        <img src={image} alt="none" />
      </div>
      <p className="border-bottom pb-2">Rating</p>
      <p style={{ fontSize: Font.Small }} className="py-2">
        {name}
      </p>
      <p
        style={{
          fontSize: discount ? Font.Small : Font.ExtraLarge,
          color: discount ? Colors.Grey : Colors.Primary,
        }}
        className="pb-2"
      >
        {" "}
        <span style={{ textDecoration: discount ? "line-through" : "none", fontWeight: discount ? 'none' : 500   }}>
          {" "}
          $ {price}{" "}
        </span>
        {discount && (
          <span
            className="mx-2"
            style={{
              color: Colors.Primary,
              fontSize: Font.ExtraLarge,
              fontWeight: "500",
            }}
          >
            $ {price - discount}
          </span>
        )}
      </p>
    </div>
  );
}
