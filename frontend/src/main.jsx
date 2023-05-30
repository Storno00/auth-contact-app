import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  { QueryClientProvider, QueryClient } from 'react-query';
import Routes from './Routes.jsx';
import { AuthProvider } from './contexts/AuthProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
        <Routes />
    </AuthProvider>
  </QueryClientProvider>
);
