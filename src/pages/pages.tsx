import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Layout from "@/components/layout/Layout";
import SingleProduct from "./singleProduct/SingleProduct";
import Articles from "./blogs/Blogs";

import Shop from "./shop/Shop";
// import ArticleComponent from "./blog/Blog";
import BlogComponent from "./blog/Blog";

const Pages = () => {
  return (
    <main className="font-Inter">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blogs" element={<Articles />} />
          <Route path="/blogs/:id" element={<BlogComponent />} />
        </Route>
      </Routes>
    </main>
  );
};

export default Pages;
