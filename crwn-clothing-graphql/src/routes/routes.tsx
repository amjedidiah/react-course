import { BrowserRouter, Routes, Route, RouteProps } from "react-router-dom";
import Spinner from "components/spinner/spinner";
import { Suspense, lazy } from "react";
import Navigation from "components/navigation/navigation";
import Home from "routes/components/home/home";

const Auth = lazy(() => import("routes/components/auth/auth"));
const Shop = lazy(() => import("routes/components/shop/shop"));
const Checkout = lazy(() => import("routes/components/checkout/checkout"));

export const routes = [
  { element: <Home />, index: true },
  { element: <Auth />, path: "/auth" },
  { element: <Checkout />, path: "/checkout" },
  { element: <Shop />, path: "/shop/*" },
] as RouteProps[];

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            {routes.map((route, i) => (
              <Route key={`route-${i}`} {...route} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}