import { CartContext } from "context/cart.context";
import PropTypes from "prop-types";
import { useContext } from "react";
import "routes/components/checkout/components/checkout-item/checkout-item.scss";

export default function CheckoutItem({ id, name, imageUrl, price, quantity }) {
  const { removeFromCart, addToCart } = useContext(CartContext);
  const removeItemFromCart = () => removeFromCart(id);
  const removeItemsFromCart = () => removeFromCart(id, true);
  const addItemToCart = () => addToCart(id);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={removeItemFromCart}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemToCart}>
          &#10095;
        </span>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={removeItemsFromCart}>&#10005;</div>
    </div>
  );
}

CheckoutItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
