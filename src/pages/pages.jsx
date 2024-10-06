import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Layout from "@/components/layout/Layout";
import SingleProduct from "./singleProduct/SingleProduct";

import Shop from "./shop/Shop";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default Pages;
