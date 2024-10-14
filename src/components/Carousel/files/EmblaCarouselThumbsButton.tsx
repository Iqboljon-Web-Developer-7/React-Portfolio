import React, { FC } from "react";

import "../styles/embla.scss";

import { boolean } from "zod";

interface propsTypes {
  selected: boolean;
  index: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  img: string;
}

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const Thumb: FC<propsTypes> = (props) => {
  const { selected, index, onClick, img } = props;

  return (
    <div
      className={"embla-thumbs__slide flex-center min-w-[8rem!important] min-h-[8rem!important] border".concat(
        selected ? " embla-thumbs__slide--selected opacity-100" : " opacity-70"
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <img
          src={img}
          alt="product img"
          className="object-contain h-[6.2rem!important]"
        />
      </button>
    </div>
  );
};
