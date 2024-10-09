import React from "react";

interface pageTypes {
  path: string;
  title: string;
  img: string;
  desc: string;
}

const PageInfo = ({ path, title, img, desc }: pageTypes) => {
  return (
    <div
      className="min-h-96 bg-cover bg-no-repeat flex-center text-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="info flex-center flex-col gap-2">
        <p className="space-x-2">
          <span className="text-[#605F5F]">Home</span>{" "}
          <span className="text-[#605F5F]">{">"} </span>
          <span>{path}</span>
        </p>
        <h3 className="text-[3.375rem]">{title}</h3>
        <p className="text-xl text-[#121212]">{desc}</p>
      </div>
    </div>
  );
};

export default PageInfo;
