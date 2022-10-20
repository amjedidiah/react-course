import styles from "routes/components/shop/components/cart/components/cart-item/cart-item.module.scss";
import { Product } from "context/category.context";

export type CartItemProps = {
  quantity: number 
} & Product

export default function CartItem({ name, quantity, price, imageUrl }: CartItemProps) {
  return (
    <div className={styles["cart-item-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={styles["item-details"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
}
