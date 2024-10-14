import React, { useState, useEffect, useCallback, FC } from "react";
import { Component } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import { EmblaOptionsType } from "embla-carousel";

import "../styles/embla.scss";

type PropType = {
  images: string[];
  options?: EmblaOptionsType;
};

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useControls } from "react-zoom-pan-pinch";

import { FaCompressArrowsAlt } from "react-icons/fa";

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

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
      <div className="tools text-xl flex-center flex-col absolute inset-[2%_auto_auto_6%] z-10 gap-1 text-slate-700">
        <button
          className="w-8 h-8 bg-slate-100 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-800 rounded-md border border-slate-300 flex-center"
          onClick={() => zoomIn()}
        >
          +
        </button>
        <button
          className="w-8 h-8 bg-slate-100 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-800 rounded-md border border-slate-300 flex-center"
          onClick={() => zoomOut()}
        >
          -
        </button>
        <button
          className="w-8 h-8 bg-slate-100 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-800 rounded-md border border-slate-300 flex-center"
          onClick={() => resetTransform()}
        >
          <FaCompressArrowsAlt className="text-sm" />
        </button>
      </div>
    );
  };

  return (
    <div className="embla w-full flex flex-row-reverse md:flex-col gap-4 md:gap-0">
      <div className="embla__viewport w-full" ref={emblaMainRef}>
        <div className="embla__container">
          {images?.map((img, index) => (
            <div className="embla__slide relative flex-center" key={index}>
              <TransformWrapper
                // ref={transformWrapperRef}
                wheel={{ disabled: true }}
                pinch={{ disabled: true }}
                // pan={{ disabled: true }}
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
              >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                  <>
                    <Controls />
                    <TransformComponent>
                      <img
                        src={img}
                        alt="test"
                        className="embla__slide__number rounded-[0!important] w-full h-[28rem!important] object-contain"
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs m-[0!important] ml-5 min-w-[8rem!important] h-full md:w-auto">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex-col md:flex-row overflow-hidden">
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
