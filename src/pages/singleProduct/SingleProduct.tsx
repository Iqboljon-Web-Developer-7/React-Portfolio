import { useGetProductQuery } from "@/redux/api/products-api";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SinglePageCarousel from "@/components/singlePageCarousel/SinglePageCarousel";

import { countStars } from "@/components/product/Product";

import { BsChevronRight } from "react-icons/bs";

const SingleProduct: FC = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetProductQuery({ id });
  const [product, setProduct] = useState(data);
  const [carouselImgs, setCarouselImgs] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState<JSX.Element>();

  useEffect(() => {
    if (data) {
      console.log(data);

      setProduct(data);
      setCarouselImgs(data?.images[0].images);
      let infoHeadings = Object.keys(data.additional_infos);

      setAdditionalInfo(
        <div className="mt-4">
          {infoHeadings.map((key, idx) => {
            let keys = Object.keys(data.additional_infos[key]);

            return (
              <div key={idx}>
                <h2 className="capitalize text-[#6C7275] my-3">{key}</h2>
                <div className="infos">
                  {keys.map((item, idx) => {
                    if (item == "unit") return;
                    return (
                      <p className="text-xl" key={idx}>
                        {item}: {data.additional_infos[key][item]}{" "}
                        {data.additional_infos[key]["unit"]}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }, [isFetching]);

  const changeColor = (name: string) => {
    let currentImgs = [];
    currentImgs = product.images.filter(
      (item: { color: string }) => item.color == name
    );
    setCarouselImgs(currentImgs[0].images);
  };

  return (
    <div className="singleProduct wrapper mb-5">
      <p className="my-5 text-sm text-[#605F5F]">
        Home &nbsp;{">"}&nbsp; Shop &nbsp;{">"}&nbsp;{" "}
        {product?.category.primary} &nbsp;
        {">"}&nbsp; {product?.title}
      </p>
      <div className="singleProduct__top flex-col md:flex-row flex-center items-start justify-between md:gap-8">
        <div className="singleProduct__top--images border min-h- w-full md:w-3/6 lg:w-2/4">
          <SinglePageCarousel images={carouselImgs} />
        </div>
        <div className="singleProduct__top--texts flex-grow self-stretch">
          <div className="flex items-center gap-3">
            <div className="flex-center justify-start gap-1 text-sm text-slate-800">
              {countStars(
                product?.reviews.comments.reduce(
                  (prev: number, current: { rating: number }) =>
                    (prev += current.rating),
                  0
                ) / product?.reviews.comments.length
              )}
            </div>
            <span className="reviews text-sm">
              {product?.reviews.comments.length} reviews
            </span>
          </div>
          <h2 className="text-[1.5rem] lg:text-[2.5rem] my-2">
            {product?.title}
          </h2>
          <p className="text-[#6C7275] text-sm lg:text-base font-light">
            {product?.description}
          </p>
          <h3 className="my-3 text-2xl lg:text-3xl flex-center justify-start gap-3">
            ${product?.price}{" "}
            {product?.price < product?.originalPrice && (
              <span className="text-base lg:text-xl line-through text-[#6C7275]">
                ${product?.originalPrice}
              </span>
            )}
          </h3>
          <hr className="mt-6" />
          <div className="additionalInfo">{additionalInfo}</div>
          <div className="colors mt-4">
            <h4 className="flex-center justify-start gap-2 text-[#6C7275] font-[500]">
              Choose colors <BsChevronRight />
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {product?.colors.map(
                (clr: { name: string; color: string }, inx: number) => {
                  return (
                    <div
                      key={inx}
                      onClick={() => changeColor(clr.name)}
                      className="min-w-10 min-h-10 rounded-full border shadow-md cursor-pointer hover:shadow-none duration-200"
                      style={{ backgroundColor: clr.color }}
                    ></div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
