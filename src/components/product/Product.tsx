import React, { FC } from "react";
import "./ProductCard.scss";
import { SwiperSlide } from "swiper/react";

import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

import { ProductPropTypes } from "@/types/product";

interface Product {
  product: ProductPropTypes;
}

const ProductCard: FC<Product> = ({ product }) => {
  const countStars = (n: number) => {
    n = Math.round(n);
    let list = [];
    for (let i = 0; i < 5; i++) {
      if (i < n) {
        list.push(<IoStar key={i} />);
      } else {
        list.push(<IoStarOutline key={i} />);
      }
    }
    return list;
  };

  return (
    <div className="product p-2">
      <div className="product__images relative group">
        <span className="status py-1 px-2 text-sm font-medium tracking-widest absolute inset-[4%_auto_auto_4%] bg-white rounded-lg">
          {product.status == "New" && "NEW"}
        </span>
        <img src={product?.images[0].images[0]} alt="product img" />
        <button className="bg-black  py-2 text-slate-100 absolute inset-[auto_4%_4%_4%] rounded-lg text-base opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300">
          Add to cart
        </button>
      </div>
      <div className="product__info mt-3 mb-10 grid gap-1 text-sm text-start font-medium">
        <div className="product__info--stars flex-center justify-start gap-1 text-sm text-slate-800">
          {countStars(
            product.comments.reduce(
              (prev, current) => (prev += current.rating),
              0
            ) / product.comments.length
          )}
        </div>
        <h4 className="product__title">{product.title}</h4>
        <p className="product__price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
