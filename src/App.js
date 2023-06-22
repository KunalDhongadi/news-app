import "./App.css";
import React from "react";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


import 'react-toastify/dist/ReactToastify.css';
import Parent from "./components/Parent";

const App = () => {
  
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <Parent/>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  );
};

export default App;
