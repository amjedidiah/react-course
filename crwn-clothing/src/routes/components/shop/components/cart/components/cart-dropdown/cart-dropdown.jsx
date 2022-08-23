import Button from "components/button/button";
import { CartContext } from "context/cart.context";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "routes/components/shop/components/cart/components/cart-dropdown/cart-dropdown.scss";
import CartItem from "routes/components/shop/components/cart/components/cart-item/cart-item";

export default function CartDropdown() {
  const { isCartOpen, cartItemsArray } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = useCallback(() => navigate("/checkout"), [navigate]);

  return (
    <div className={`cart-dropdown-container ${isCartOpen ? "" : "hide"}`}>
      <div className="cart-items">
        {cartItemsArray.map((cartItem) => (
          <CartItem key={`cartItem-${cartItem.id}`} {...cartItem} />
        ))}
      </div>
      <Button value="GO TO CHECKOUT" onClick={goToCheckout} disabled={!cartItemsArray.length} />
    </div>
  );
}
