import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const ErrorFallback = () => (
  <div role="alert">
    <p>Something went wrong.</p>
  </div>
);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
