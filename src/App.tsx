import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Header, Navbar } from './components';
import {
  HomePage,
  NeighborPage,
  TicketApplyPage,
  TicketDetailViewPage,
  MyPage,
  AddressSearchPage,
  LoginPage,
  SignUpPage,
  CreateCrewPage,
} from './pages';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/ticket" element={<TicketApplyPage />} />
            <Route path="/neighbor" element={<NeighborPage />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/addressSearch" element={<AddressSearchPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/createCrew" element={<CreateCrewPage />} />
            <Route path="/ticketDetail" element={<TicketDetailViewPage />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
