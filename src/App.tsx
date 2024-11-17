import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TicketApplyPage from './pages/TicketApplyPage';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/ticket" element={<TicketApplyPage />}></Route>
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
