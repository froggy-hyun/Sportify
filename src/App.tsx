import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Header, Navbar } from './components';
import { HomePage, NeighborPage, TicketApplyPage, MyPage, AddressSearchPage } from './pages';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/ticket" element={<TicketApplyPage />}></Route>
            <Route path="/neighbor" element={<NeighborPage />}></Route>
            <Route path="/my" element={<MyPage />}></Route>
            <Route path="/addressSearch" element={<AddressSearchPage />}></Route>
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
