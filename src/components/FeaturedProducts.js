import React from "react";
import ProductImage from "../assets/images/product1.jpeg";
import Product from "../elements/Product"
import HeaderNormal from "../elements/HeaderNormal"

const data = [
  {
    id: "1",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "2",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "3",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "4",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "5",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "6",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "7",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
  {
    id: "8",
    name: "Slim Fit Denim Scratched High Quality Men's",
    price: "9.00",
    discount: "2.25",
    rating: "4",
    label: "New",
    image: ProductImage,
  },
];



export default function FeaturedProducts() {
  return (
    <div className="container my-5">
      <HeaderNormal>Featured Products</HeaderNormal>
      <div className="inline-flex">{
          data.map((item)=>(
              <Product {...item} />
          ))
      }</div>
    </div>
  );
}
