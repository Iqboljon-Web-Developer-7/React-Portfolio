import React, { FC } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface StyledLink {
  to: string;
  title: string;
}

const StyledLink: FC<StyledLink> = ({ to, title }) => {
  return (
    <Link
      to={to}
      className="border-b border-black w-fit flex-center justify-start gap-3 mt-3"
    >
      {title} <GoArrowRight />
    </Link>
  );
};

export default StyledLink;
