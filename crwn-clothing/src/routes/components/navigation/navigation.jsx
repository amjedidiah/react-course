import { Fragment, useCallback, useContext, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import "routes/components/navigation/navigation.scss";
import { ReactComponent as CrwnLogo } from "assets/crown.svg";
import { UserContext } from "context/user.context";
import { signOutAuth } from "utils/firebase.utils";

const pages = [
  {
    to: "/shop",
    children: "SHOP",
    className: "nav-link",
  },
];

export default function Navigation() {
  const { currentUser } = useContext(UserContext);

  const handleLogout = useCallback(async () => {
    await signOutAuth();
  }, []);

  const updatedPages = useMemo(() => {
    pages[1] = currentUser
      ? {
          children: "LOGOUT",
          onClick: handleLogout,
          className: "nav-link",
        }
      : {
          to: "/auth",
          children: "LOGIN",
          className: "nav-link",
        };
    return pages;
  }, [currentUser, handleLogout]);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {updatedPages.map((page, i) =>
            page.to ? (
              <Link key={`page-${i}`} {...page} />
            ) : (
              <span key={`span-${i}`} {...page} />
            )
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
