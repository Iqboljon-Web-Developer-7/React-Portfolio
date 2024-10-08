import { api } from "./index";

export const articlesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query({
      query: () => ({
        url: "/67040345e41b4d34e43e9875",
        headers: {
          "X-JSON-Path": `$..articles[:3]`,
        },
      }),
      providesTags: ["Articles"],
    }),
    getArticle: build.query({
      query: ({ id }) => ({
        url: "/67040345e41b4d34e43e9875",
        headers: {
          "X-JSON-Path": `$..articles[?(@.id == ${id})]`,
        },
      }),
      providesTags: ["Articles"],
    }),
  }),
});
export const { useGetArticleQuery, useGetArticlesQuery } = articlesApi;
