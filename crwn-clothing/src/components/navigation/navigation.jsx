import { Fragment, useCallback, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "components/navigation/navigation.module.scss";
import { ReactComponent as CrwnLogo } from "assets/crown.svg";
import CartIcon from "routes/components/shop/components/cart/components/cart-icon/cart-icon";
import CartDropdown from "routes/components/shop/components/cart/components/cart-dropdown/cart-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "redux/selectors/user.selector";
import { logoutPending } from "redux/actions/user.action";

const pages = [
  {
    to: "/shop",
    children: "SHOP",
  },
];

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logoutPending());
    // Disabled because dispatch is never updated throughout the React app lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatedPages = useMemo(() => {
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
              <Link
                className={styles["nav-link"]}
                key={`page-${i}`}
                {...page}
              />
            ) : (
              <span
                className={styles["nav-link"]}
                key={`span-${i}`}
                {...page}
              />
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
