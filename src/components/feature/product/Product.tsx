import React, { FC, useEffect, useRef, useState } from "react";
import "./ProductCard.scss";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { ProductPropTypes } from "@/types/product";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

import { TbHandMove } from "react-icons/tb";

interface Product {
  product: ProductPropTypes;
}

export const countStars = (n: number): JSX.Element[] => {
  n = Math.round(n);
  const list: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    if (i < n) {
      list.push(<IoStar key={i} className="dark:text-slate-100" />);
    } else {
      list.push(<IoStarOutline key={i} className="dark:text-slate-100" />);
    }
  }
  return list;
};

const ProductCard: FC<Product> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState<string>(
    product?.images[0].images[0]
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const target = event.currentTarget as HTMLDivElement; // Get the div where the event happened
    const { offsetWidth } = target; // Correctly extract the width of the target element
    const offsetX = event.nativeEvent.offsetX; // Mouse position relative to the target

    const percentage = (offsetX / offsetWidth) * 100;
    setCurrentImageIndex(
      Math.floor(percentage / (100 / product?.images[0].images.length))
    );

    if (product.images[0].images[currentImageIndex]) {
      setCurrentImage(product.images[0].images[currentImageIndex]);
    }
  };

  return (
    <div className="product relative p-2 hover:shadow-lg duration-200">
      <span className="absolute inset-[4%_4%_auto_auto] z-10 p-2 bg-[#0f172a99] rounded-full text-white">
        <TbHandMove />
      </span>
      <div
        className="product__images relative group"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCurrentImage(product?.images[0].images[0])}
      >
        <span className="status py-1 px-2 text-sm font-medium tracking-widest absolute inset-[4%_auto_auto_4%] bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg shadow-sm">
          {product.status === "New" && "NEW"}
        </span>
        <img src={currentImage} alt="product img" className="duration-300" />
        <button className="bg-black py-[.35rem] md:py-2 text-slate-100 absolute inset-[auto_4%_4%_4%] rounded-lg text-sm md:text-base opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300">
          Add to cart
        </button>
        <div
          className="product__images--counter grid gap-4 absolute inset-[auto_2%_-2%_2%]"
          style={{
            gridTemplateColumns: `repeat(${product?.images[0].images.length}, 1fr)`,
          }}
        >
          {product?.images[0].images.map((_, idx) => (
            <div
              key={idx}
              className={`line h-[.15rem] duration-500 ${
                idx == currentImageIndex ? "bg-gray-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="product__info mt-4 grid gap-1 text-sm text-start font-medium">
        <div className="product__info--stars flex-center justify-start gap-1 text-sm text-slate-800">
          {countStars(
            product.reviews.comments.reduce(
              (prev, current) => (prev += current.rating),
              0
            ) / product.reviews.comments.length
          )}
        </div>
        <h4 className="product__title">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h4>
        <p className="product__price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
