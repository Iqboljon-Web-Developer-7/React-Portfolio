import { useGetBlogsQuery } from "@/redux/api/blogs";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import StyledLink from "../styledLink/StyledLink";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Blogs = () => {
  const { data } = useGetBlogsQuery({ limit: "5" });

  console.log(data);

  interface Section {
    heading: string;
    paragraph: string;
    images: string[];
  }

  interface Article {
    id: number;
    title: string;
    date: string;
    sections: Section[];
  }

  return (
    <section className="wrapper py-[5%]">
      <div className="articles__info flex-center justify-between">
        <h2 className="articles__info--heading text-[2.5rem] font-medium">
          Articles
        </h2>
        <Link
          to={"/articles"}
          className="underline underline-offset-4 flex-center gap-3"
        >
          More Articles <GoArrowRight />
        </Link>
      </div>
      <Carousel>
        {data ? (
          <CarouselContent>
            {data?.record.map((article: Article) => (
              <CarouselItem
                key={article.id}
                className="md:basis-1/2 lg:basis-1/3 flex-shrink-0 w-full sm:w-2/4 md:w-full snap-center"
              >
                <img
                  className="max-h-60 object-cover"
                  src={article.sections[0].images[0]}
                  alt="article image"
                />
                <h3 className="line-clamp-1 mt-5 text-xl">{article.title}</h3>

                <StyledLink to={`/blogs/${article.id}`} title="Read More" />
              </CarouselItem>
            ))}
          </CarouselContent>
        ) : (
          <div className="flex md:grid grid-cols-3 gap-3 w-full">
            {new Array(3).fill(3).map((_, idx) => (
              <CarouselItem
                key={idx}
                className="animate-pulse p-4 flex-shrink-0 md:w-full h-80 bg-gray-200 rounded-lg"
              >
                <div className="h-48 bg-gray-300 mb-4 rounded-md"></div>
                <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-4 bg-gray-300 rounded-md"></div>
              </CarouselItem>
            ))}
          </div>
        )}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Blogs;
