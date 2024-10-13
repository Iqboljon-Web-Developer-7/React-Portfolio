import { useGetBlogQuery } from "@/redux/api/blogs";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { CiCalendar } from "react-icons/ci";

// Define interfaces
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

const BlogComponent: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article>(); // Define state with Article[] type

  const { data, isLoading } = useGetBlogQuery({ id });

  useEffect(() => {
    if (data?.record) {
      setArticle(data?.record[0]);
    }
  }, [data, isLoading]);

  return (
    <div className="wrapper">
      <div className="article__info">
        <p className="my-5 text-sm text-[#605F5F] dark:text-slate-400">
          <Link to={"/"}>Home</Link> &nbsp;{">"}&nbsp;{" "}
          <Link to={"/blogs"}>Blog</Link> &nbsp;{">"}&nbsp;{" "}
          <span className="text-slate-800 dark:text-slate-300">
            {article?.title}
          </span>
        </p>
      </div>
      <div className="mb-12 mt-10">
        <div className="mb-6">
          <p className="mt-2 font-semibold text-sm tracking-normal">ARTICLE</p>
          <h1 className="text-2xl sm:text-[3.25rem] font-medium leading-[1] my-6">
            {article?.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-slate-300 flex-center gap-2 justify-start">
            <CiCalendar />{" "}
            {article ? (
              article?.date
            ) : (
              <span className="min-h-4 min-w-32 bg-gray-400 animate-pulse rounded-xl"></span>
            )}
          </p>
        </div>

        {article ? (
          article?.sections?.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                {section.heading}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {section?.paragraph}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section?.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={section.heading}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center animate-pulse justify-center h-full w-full bg-slate-900">
            <div className="w-full h-16 animate-pulse delay-100 bg-gray-400 rounded-md mb-4"></div>
            <div className="w-full h-48 animate-pulse delay-200 bg-gray-400 rounded-md mb-4"></div>
            <div className="w-full h-12 animate-pulse delay-300 bg-gray-400 rounded-md mb-4"></div>
            <div className="w-full h-12 animate-pulse delay-500 bg-gray-400 rounded-md mb-4"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogComponent;
