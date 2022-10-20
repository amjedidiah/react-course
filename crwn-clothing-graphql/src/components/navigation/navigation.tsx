import {
  Fragment,
  SyntheticEvent,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { Link, LinkProps, NavLink, Outlet } from "react-router-dom";
import styles from "components/navigation/navigation.module.scss";
import { ReactComponent as CrwnLogo } from "assets/crown.svg";
import CartIcon from "routes/components/shop/components/cart/components/cart-icon/cart-icon";
import CartDropdown from "routes/components/shop/components/cart/components/cart-dropdown/cart-dropdown";
import { UserContext } from "context/user.context";
import { signOutAuth } from "utils/firebase.utils";

const pages = [
  {
    to: "/shop",
    children: "SHOP",
  },
] as LinkProps[];

export default function Navigation() {
  const { currentUser } = useContext(UserContext);

  const handleLogout = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    signOutAuth();
    // Disabled because dispatch is never updated throughout the React app lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatedPages = useMemo(() => {
    pages[1] = currentUser
      ? {
          to: "",
          children: "LOGOUT",
          onClick: handleLogout,
        }
      : {
          to: "/auth",
          children: "LOGIN",
        };
    return pages as LinkProps[];
  }, [currentUser, handleLogout]);

  const renderUpdatedPages = useCallback(() => {
    return updatedPages.map((page, index) =>
      page.to ? (
        <NavLink
          className={styles["nav-link"]}
          key={`page-${index}`}
          {...page}
        />
      ) : (
        <span className={styles["nav-link"]} key={`span-${index}`} {...page} />
      )
    );
  }, [updatedPages]);

  return (
    <Fragment>
      <div className={styles.navigation}>
        <Link className={styles["logo-container"]} to="/">
          <CrwnLogo className={styles.logo} />
        </Link>
        <div className={styles["nav-links-container"]}>
          {renderUpdatedPages()}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
}
