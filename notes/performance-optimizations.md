# Performance Optimizations

> Do not perform optimization until it is needed

## React optimization techniques

### `useMemo`

```tsx

export const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleText = () => {
    setText('Hello');
  };

  const handleReset = () => {
    setCount(0);
    setText('Hello');
  };

  const handleAlert = () => {
    alert(`Count: ${count} Text: ${text}`);
  };

  const handleAlertMemo = useMemo(() => {
    alert(`Count: ${count} Text: ${text}`);
  }, [count, text]);

  return (
    <div>
      <div>
        <button onClick={handleCount}>Count: {count}</button>
        <button onClick={handleText}>Text: {text}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <button onClick={handleAlertMemo}>Alert</button>
      </div>
    </div>
  );
};

```

### `useCallback`

```tsx

export const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleText = useCallback(() => {
    setText('Hello');
  }, [text]);

  const handleReset = useCallback(() => {
    setCount(0);
    setText('Hello');
  }, [count, text]);

  const handleAlert = useCallback(() => {
    alert(`Count: ${count} Text: ${text}`);
  }, [count, text]);

  return (
    <div>
      <div>
        <button onClick={handleCount}>Count: {count}</button>
        <button onClick={handleText}>Text: {text}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <button onClick={handleAlert}>Alert</button>
      </div>
    </div>
  );
};

```

### `React.memo` & React DevTools Profiling

> Mostly used for where components are rendered multiple times, like from mapping a list

```tsx

export const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleText = useCallback(() => {
    setText('Hello');
  }, [text]);

  const handleReset = useCallback(() => {
    setCount(0);
    setText('Hello');
  }, [count, text]);

  const handleAlert = useCallback(() => {
    alert(`Count: ${count} Text: ${text}`);
  }, [count, text]);

  return (
    <div>
      <div>
        <button onClick={handleCount}>Count: {count}</button>
        <button onClick={handleText}>Text: {text}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <button onClick={handleAlert}>Alert</button>
      </div>
    </div>
  );
};

export const MyComponentMemo = React.memo(MyComponent);

```

### Code Splitting, Dynamic Imports & Lazy Loading

```tsx

import { BrowserRouter, Routes, Route, RouteProps } from "react-router-dom";
import Spinner from "components/spinner/spinner";
import { Suspense, lazy } from "react";

const Auth = lazy(() => import("routes/components/auth/auth"));
const Home = lazy(() => import("routes/components/home/home"));
const Navigation = lazy(() => import("components/navigation/navigation"));
const Shop = lazy(() => import("routes/components/shop/shop"));
const Checkout = lazy(() => import("routes/components/checkout/checkout"));

export const routes = [
  { element: <Home />, index: true },
  { element: <Auth />, path: "/auth" },
  { element: <Checkout />, path: "/checkout" },
  { element: <Shop />, path: "/shop/*" },
] as RouteProps[];

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            {routes.map((route, i) => (
              <Route key={`route-${i}`} {...route} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

```
