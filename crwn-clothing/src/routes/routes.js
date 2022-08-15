import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/login/login";
import Home from "./home/home";
import Navigation from "./navigation/navigation";

export const routes = [
    { element: <Home />, index: true },
    { element: <Login />, path: "/login", children: "LOGIN" },
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
