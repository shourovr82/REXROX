import { createBrowserRouter } from "react-router-dom";
import Shourovr82Layout from "../Layout/Shourovr82Layout";
import Homepage from "../Pages/Home/Homepage";

const shourovr82 = createBrowserRouter([
  {
    path: '/',
    element: <Shourovr82Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
    ]
  }
])

export default shourovr82;