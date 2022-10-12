import {loadStripe} from '@stripe/stripe-js';

const REACT_APP_STRIPE_PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || "";
export const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLISHABLE_KEY)