import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Comments } from './pages/Comments';
import { Contacts } from './pages/Contacts';
import { NotFoundPage } from './pages/404';
import { Template } from './components/template/template';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ]
  },
]);