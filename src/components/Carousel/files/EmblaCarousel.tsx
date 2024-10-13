import React, { useState, useEffect, useCallback, FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import { EmblaOptionsType } from "embla-carousel";

import "../styles/embla.scss";
import Zoom from "react-medium-image-zoom";

type PropType = {
  images: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: FC<PropType> = ({ images, options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla w-full flex flex-row-reverse md:flex-col gap-4">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {images?.map((img, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__number rounded-[0!important] w-full h-[28rem!important] object-contain"
                src={img}
              ></img>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs m-[0!important] ml-5 w-24 h-full md:w-auto">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex-col md:flex-row overflow-auto h-[24rem]">
            {images?.map((img, index) => (
              <Thumb
                img={img}
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
