import { useGetArticleQuery } from "@/redux/api/articles-api";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

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

const ArticleComponent: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article>(); // Define state with Article[] type

  const { data, isLoading } = useGetArticleQuery({ id });

  useEffect(() => {
    if (data?.record) {
      setArticle(data?.record[0]);
    }
  }, [data, isLoading]);

  return (
    <div key={article?.id} className="mb-12">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          {article?.title}
        </h1>
        <p className="text-sm sm:text-base text-gray-500">{article?.date}</p>
      </div>

      {article?.sections?.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            {section.heading}
          </h2>
          <p className="text-gray-700 mb-4">{section?.paragraph}</p>

          {/* Responsive Image Grid */}
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
  );
};

export default ArticleComponent;
