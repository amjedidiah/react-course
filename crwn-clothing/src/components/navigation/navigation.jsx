import { Fragment, useCallback, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "components/navigation/navigation.module.scss";
import { ReactComponent as CrwnLogo } from "assets/crown.svg";
import { signOutAuth } from "utils/firebase.utils";
import CartIcon from "routes/components/shop/components/cart/components/cart-icon/cart-icon";
import CartDropdown from "routes/components/shop/components/cart/components/cart-dropdown/cart-dropdown";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/selectors/user.selector";

const pages = [
  {
    to: "/shop",
    children: "SHOP",
  },
];

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);

  const handleLogout = useCallback(async () => {
    await signOutAuth();
  }, []);

  const updatedPages = useMemo(() => {
    console.log("updatedPages", currentUser);
    pages[1] = currentUser
      ? {
          children: "LOGOUT",
          onClick: handleLogout,
        }
      : {
          to: "/auth",
          children: "LOGIN",
        };
    return pages;
  }, [currentUser, handleLogout]);

  return (
    <Fragment>
      <div className={styles.navigation}>
        <Link className={styles["logo-container"]} to="/">
          <CrwnLogo className={styles.logo} />
        </Link>
        <div className={styles["nav-links-container"]}>
          {updatedPages.map((page, i) =>
            page.to ? (
              <Link className={styles['nav-link']} key={`page-${i}`} {...page} />
            ) : (
              <span className={styles['nav-link']} key={`span-${i}`} {...page} />
            )
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
}
