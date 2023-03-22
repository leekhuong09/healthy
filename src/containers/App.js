import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MyPage from "./MyPage";
import MyRecord from "./MyRecord";
import Category from "./Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyPage />,
  },
  {
    path: "/my-record",
    element: <MyRecord />,
  },
  {
    path: "/category",
    element: <Category />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider
        router={router}
        fallbackElement={<div>loading ...</div>}
      />
    </div>
  );
};

export default App;
