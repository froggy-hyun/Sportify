import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Header, Navbar } from './components';
import {
  HomePage,
  ManageCrewPage,
  TicketApplyPage,
  TicketDetailViewPage,
  MyPage,
  AddressSearchPage,
  LoginPage,
  SignUpPage,
  CreateCrewPage,
} from './pages';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const queryClient = new QueryClient();
  const token = localStorage.getItem('accessToken');
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={token ? <HomePage /> : <LoginPage />} />
            <Route path="/ticket" element={<TicketApplyPage />} />
            <Route path="/manageCrew" element={<ManageCrewPage />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/addressSearch" element={<AddressSearchPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/createCrew/:id" element={<CreateCrewPage />} />
            <Route path="/ticketItem/:id" element={<TicketDetailViewPage />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
