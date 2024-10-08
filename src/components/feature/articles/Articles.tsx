import { useGetArticlesQuery } from "@/redux/api/articles-api";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import StyledLink from "../styledLink/StyledLink";

const Articles = () => {
  const { data } = useGetArticlesQuery("");

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
      <div className="mt-7 articles flex justify-between md:grid grid-cols-3 overflow-x-auto gap-5 snap-x">
        {data?.record.map((article: Article) => (
          <div
            key={article.id}
            className="flex-shrink-0 w-full sm:w-2/4 md:w-full snap-center"
          >
            <img
              className="max-h-60 object-cover"
              src={article.sections[0].images[0]}
              alt="article image"
            />
            <h3 className="line-clamp-1 mt-5 text-xl">{article.title}</h3>

            <StyledLink to={`/articles/${article.id}`} title="Read More" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
