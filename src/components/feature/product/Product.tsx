import React, { FC, useState } from "react";
import "./ProductCard.scss";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { ProductPropTypes } from "@/types/product";
import { Link } from "react-router-dom";

interface Product {
  product: ProductPropTypes;
}

export const countStars = (n: number): JSX.Element[] => {
  n = Math.round(n);
  const list: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    if (i < n) {
      list.push(<IoStar key={i} />);
    } else {
      list.push(<IoStarOutline key={i} />);
    }
  }
  return list;
};

const ProductCard: FC<Product> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState<string>(
    product?.images[0].images[0]
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const target = event.currentTarget as HTMLDivElement; // Get the div where the event happened
    const { offsetWidth } = target; // Correctly extract the width of the target element
    const offsetX = event.nativeEvent.offsetX; // Mouse position relative to the target

    const percentage = (offsetX / offsetWidth) * 100;
    const imageIndex = Math.floor(percentage / 25);

    if (product.images[0].images[imageIndex]) {
      setCurrentImage(product.images[0].images[imageIndex]);
    }
  };

  return (
    <div className="product p-2">
      <div
        className="product__images relative group"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCurrentImage(product?.images[0].images[0])}
      >
        <span className="status py-1 px-2 text-sm font-medium tracking-widest absolute inset-[4%_auto_auto_4%] bg-white rounded-lg">
          {product.status === "New" && "NEW"}
        </span>
        <img
          src={currentImage}
          alt="product img"
          className="hover:scale-[1.03] duration-300"
        />
        <button className="bg-black py-2 text-slate-100 absolute inset-[auto_4%_4%_4%] rounded-lg text-base opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300">
          Add to cart
        </button>
      </div>
      <div className="product__info mt-3 mb-10 grid gap-1 text-sm text-start font-medium">
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
