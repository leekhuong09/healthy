import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Highlight from "../../components/Highlight";
import Filter from "../../components/Filter";
import PhotoList from "../../components/PhotoList";
import Button from "../../components/Button";

import dataList from "../../../public/data/my-page.json";

const MyPage = () => {
  const [page, setPage] = useState(0);
  const [dataFilter, setDataFilter] = useState(dataList?.data);
  const labels = [
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#8FE9D0",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [65, 30, 80, 81, 56, 55, 40],
        borderColor: "#FFCC21",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const onFilter = (text) => {
    const DATA = dataList.data.filter(
      (value) => value.title.indexOf(text) !== -1
    );
    setDataFilter(DATA);
  };
  return (
    <DefaultLayout>
      <Highlight data={data} />
      <Filter onClick={onFilter} />
      <PhotoList data={dataFilter} page={page} />
      <Button onClick={() => setPage(page + 1)}>記録をもっと見る</Button>
    </DefaultLayout>
  );
};

export default MyPage;
