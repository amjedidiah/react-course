import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Navigation from "./navigation/navigation";

const routes = [{ element: <Home />, index: true }];

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
