import React, { FC } from "react";

import "../styles/embla.scss";

import { boolean } from "zod";

interface propsTypes {
  selected: boolean;
  index: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  img: string;
}

export const Thumb: FC<propsTypes> = (props) => {
  const { selected, index, onClick, img } = props;

  return (
    <div
      className={"embla-thumbs__slide opacity-70 min-w-[6rem!important] min-h-[6rem!important]".concat(
        selected ? " embla-thumbs__slide--selected opacity-100" : ""
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
