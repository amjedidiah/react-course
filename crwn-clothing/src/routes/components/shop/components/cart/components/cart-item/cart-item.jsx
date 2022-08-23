import "routes/components/shop/components/cart/components/cart-item/cart-item.scss";
import PropTypes from "prop-types";

export default function CartItem({ name, quantity, price, imageUrl }) {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
