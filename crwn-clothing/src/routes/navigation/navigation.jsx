import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.scss"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

const pages = [
    {
        to: "/shop",
        children: "SHOP",
    },
    {
        to: "/login",
        children: "LOGIN",
    },
];

export default function Navigation() {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    {pages.map((page, i) => (
                        <Link key={`page-${i}`} className="nav-link" {...page} />
                    ))}
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}
