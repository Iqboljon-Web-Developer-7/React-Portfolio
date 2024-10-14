import { useGetProductQuery } from "@/redux/api/products-api";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { countStars } from "@/components/feature/product/Product";

import { BsChevronRight } from "react-icons/bs";
import EmblaCarousel from "@/components/carousel/files/EmblaCarousel";

interface CarouselImgsTypes {
  images: string[];
  color: string;
}

const SingleProduct: FC = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetProductQuery({ id });
  const [product, setProduct] = useState(data?.record[0]);
  const [carouselImgs, setCarouselImgs] = useState<CarouselImgsTypes>();
  const [additionalInfo, setAdditionalInfo] = useState<JSX.Element>();

  useEffect(() => {
    if (data) {
      setProduct(data?.record[0]);
      setCarouselImgs(data?.record[0]?.images[0]);

      let infoHeadings = Object.keys(data?.record[0]?.additional_infos);

      setAdditionalInfo(
        <div className="mt-4 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {infoHeadings.map((key, idx) => {
            let keys = Object.keys(data?.record[0]?.additional_infos[key]);

            return (
              <div key={idx}>
                <h2 className="capitalize text-[#6C7275] my-3">{key}</h2>
                <div className="infos">
                  {keys.map((item, idx) => {
                    if (item == "unit") return;
                    return (
                      <p className="text-xl" key={idx}>
                        {item}: {data?.record[0]?.additional_infos[key][item]}{" "}
                        {data?.record[0]?.additional_infos[key]["unit"]}
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
  }, [isLoading]);

  const changeColor = (name: string) => {
    let currentImgs = [];
    currentImgs = product.images.filter(
      (item: { color: string }) => item.color == name
    );
    setCarouselImgs(currentImgs[0]);
  };

  return data?.record[0] ? (
    <div className="singleProduct wrapper mb-5">
      <p className="my-5 text-sm text-[#605F5F]">
        Home &nbsp;{">"}&nbsp; Shop &nbsp;{">"}&nbsp;{" "}
        {product?.category.primary} &nbsp;
        {">"}&nbsp; {product?.title}
      </p>
      <div className="singleProduct__top grid md:grid-cols-[6fr_7fr] xl:grid-cols-2 gap-4">
        <div className="singleProduct__top--images border">
          <EmblaCarousel images={carouselImgs?.images!} />
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
              Choose colors <BsChevronRight />{" "}
              <span>{carouselImgs?.color}</span>
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
  ) : (
    <div className="animate-pulse wrapper mt-6">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4 sm:w-1/4"></div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-2/4 h-64 bg-gray-200 rounded sm:h-80 lg:w-1/2"></div>

        <div className="flex-1">
          <div className="h-8 bg-gray-200 rounded w-2/3 mb-4 sm:w-3/4"></div>

          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4 sm:w-1/4"></div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/2 sm:w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 sm:w-1/6"></div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/3 sm:w-1/4"></div>
            <div className="flex gap-4 mt-2">
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
