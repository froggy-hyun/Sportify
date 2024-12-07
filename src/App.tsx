import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
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
import ScrollToTop from './util/ScrollToTop';
import HeaderNav from './components/componentsLayout/HeaderNav';

function App() {
  const queryClient = new QueryClient();
  const token = localStorage.getItem('accessToken');

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RecoilRoot>
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route element={<HeaderNav />}>
              <Route path="/ticket" element={<TicketApplyPage />} />
              <Route path="/manageCrew" element={<ManageCrewPage />} />
              <Route path="/my" element={<MyPage />} />
              <Route path="/" element={token ? <HomePage /> : <LoginPage />} />
              <Route path="/ticketItem/:id" element={<TicketDetailViewPage />} />
              <Route path="/addressSearch" element={<AddressSearchPage />} />{' '}
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/createCrew/:id" element={<CreateCrewPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
