import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Index } from "pages/Index/Index";
import { TopRated } from "pages/TopRated";
import { MostPopularity } from "pages/MostPopularity";

export const ForRotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index />} path="/" />
        <Route element={<TopRated />} path="/top" />
        <Route element={<MostPopularity />} path="/popularity" />
      </Routes>
    </BrowserRouter>
  );
};
