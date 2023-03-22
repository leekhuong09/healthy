import React, { useState } from "react";

import Categories from "../../components/Categories";

import DefaultLayout from "../../layouts/DefaultLayout";

import Articals from "../../components/Articals";
import Button from "../../components/Button";

import categoryData from "../../../public/data/category.json";
import articalsData from "../../../public/data/artical-category.json";

const Category = () => {
  const [page, setPage] = useState(0);
  return (
    <DefaultLayout>
      <Categories data={categoryData?.data} />
      <Articals data={articalsData?.data} page={page} />
      <Button onClick={() => setPage(page + 1)}>記録をもっと見る</Button>
    </DefaultLayout>
  );
};

export default Category;
