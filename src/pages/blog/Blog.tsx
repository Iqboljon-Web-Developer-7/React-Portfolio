import { useGetBlogQuery } from "@/redux/api/blogs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <p className="my-5 text-sm text-[#605F5F]">
          Home &nbsp;{">"}&nbsp; Blog &nbsp;{">"}&nbsp;{" "}
          <span className="text-slate-800">{article?.title}</span>
        </p>
      </div>
      <div className="mb-12 mt-10">
        <div className="mb-6">
          <p className="mt-2 font-semibold text-sm tracking-normal">ARTICLE</p>
          <h1 className="text-2xl sm:text-[3.25rem] font-medium leading-[1] my-6">
            {article?.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 flex-center gap-2 justify-start">
            <CiCalendar className="" /> {article?.date}
          </p>
        </div>

        {article?.sections?.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {section.heading}
            </h2>
            <p className="text-gray-700 mb-4">{section?.paragraph}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section?.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={section.heading}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
