import Home from "presentation/container/page/Home";
import Help from "presentation/container/page/Help";
import Features from "presentation/container/page/Features";
import Testimonials from "presentation/container/page/Testimonials";
import Product from "presentation/container/page/Product";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Halaman tidak ditemukan</h1>,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "/product",
    element: <Product />,
  },
];

export default routeConfig;
