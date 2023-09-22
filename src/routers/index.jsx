import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"

import Homepage from "../pages/Homepage"
import Resultspage from "../pages/Resultspage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/search",
        element: <Resultspage />,
      },
    ],
  },
])
