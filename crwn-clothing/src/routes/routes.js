import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "routes/components/auth/auth";
import Home from "routes/components/home/home";
import Navigation from "routes/components/navigation/navigation";

export const routes = [
    { element: <Home />, index: true },
    { element: <Auth />, path: "/auth", children: "LOGIN" },
];

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
