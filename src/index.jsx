import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <div>
    <h1>Hello Webpack</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
