import { BrowserRouter, Routes, Route, RouteProps } from "react-router-dom";
import Auth from "routes/components/auth/auth";
import Home from "routes/components/home/home";
import Navigation from "components/navigation/navigation";
import Shop from "routes/components/shop/shop";
import Checkout from "routes/components/checkout/checkout";

export const routes = [
  { element: <Home />, index: true },
  { element: <Auth />, path: "/auth" },
  { element: <Checkout />, path: "/checkout" },
  { element: <Shop />, path: "/shop/*" },
] as RouteProps[];

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          {routes.map((route, i) => (
            <Route key={`route-${i}`} {...route} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}