import React, { FC } from "react";
import Header from "@/components/header/Header";

import { Outlet } from "react-router-dom";

const Layout: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
