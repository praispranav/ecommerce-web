import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import ProductDetail from "../pages/ProductDetail";
import ImageViewer from "../components/ImageViewer";
import CartPage from "../pages/CartPage";

export const publicRoutes = [
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "/product",
    component: ProductDetail,
  },
  {
    path: "/ui/image",
    component: ImageViewer,
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/",
    component: Home,
  },
];
