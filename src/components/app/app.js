import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import cardList from "/src/data/cards";
import gallery from "/src/data/gallery";
import goods from "/src/data/goods";
import { routes } from "/src/data/routes";

import MainPage from "/src/components/pages/main-page/main-page";
import Catalog from "/src/components/pages/catalog-page/catalog";

import ScrollToTop from "../elements/scroll-to/scroll-to";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={routes.MAIN}
            element={
              <PageWrapper
              //  cards={cardList} slides={gallery} goods={goods}
              />
            }
          >
            <Route index element={<MainPage cards={cardList} />} />

            <Route
              path={routes.BUY}
              element={<Catalog slides={gallery} goods={goods} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
