export type AuthDetails = {
  email: string;
  password: string;
  displayName?: string;
};

export type Category = {
  title: string;
  items: Product[];
}

export type CategoryMap = {
  [title: string]: ProductWithCategory[];
}

export type CategoryState = {
  categories: Category[] | null;
  error: StateError;
  isLoading: boolean;
};

export interface CartItem extends Product {
  quantity: number;
}

export type CartItems = {
  [key: string]: CartItem;
};

export type CartState = {
  readonly cartItems: CartItems;
  readonly isCartOpen: boolean;
};

export type CurrentUser = {
  displayName: string;
  createdAt: string;
  email: string;
} | null;

export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export interface ProductWithCategory extends Product {
  category: string;
}

export type StateError = Error | null;

export type StoreState = {
  readonly cart: CartState;
  readonly category: CategoryState;
  readonly user: UserState;
};

export type UserState = {
  readonly currentUser: CurrentUser;
  readonly error: StateError;
  readonly isLoading: boolean;
};
