import React from "react";
import "./style.css";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
// import MainPage from "/src/components/pages/main-page/main-page";
// import Catalog from "/src/components/pages/catalog-page/catalog";
import { Outlet } from "react-router-dom";

function PageWrapper({ ...props }) {
  // console.log("На странице page wrapper переданы пропсы:", props);
  // ОБРАТИТЬ СЮДА ВНИМАНИЮ ЗАВТРА
  return (
    <>
      <Header />
      <main className="page-wrapper__main ">
        {/* <MainPage {...props} /> */}
        {/* <Catalog slides={props.slides} goods={props.goods} /> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
