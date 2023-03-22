import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import RecordList from "../../components/RecordList";
import Chart from "../../components/Chart";
import MyExercise from "../../components/MyExercise";
import MyDiary from "../../components/MyDiary";
import Button from "../../components/Button";

import myExerciseData from "../../../public/data/my-exercise.json";
import myDiaryData from "../../../public/data/my-diary.json";

const MyRecord = () => {
  const [page, setPage] = useState(0);
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
  const options = {
    responsive: true,
    plugins: {
      title: { display: true, text: "BODY RECORD" },
      legend: {
        position: "bottom",
      },
    },
  };
  return (
    <DefaultLayout>
      <RecordList />
      <div className="container">
        <Chart data={data} options={options} />
      </div>
      <div className="container">
        <MyExercise data={myExerciseData?.data} />
      </div>
      <div className="container">
        <MyDiary data={myDiaryData?.data} page={page} />
      </div>
      <Button onClick={() => setPage(page + 1)}>記録をもっと見る</Button>
    </DefaultLayout>
  );
};

export default MyRecord;
