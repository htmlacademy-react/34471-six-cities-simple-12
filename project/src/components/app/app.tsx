import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/notfound-page/notfound-page';
import PrivateRoute from '../private-router/private-router';
import { HelmetProvider } from 'react-helmet-async';

type AppScreenProps = {
  placesCount: number;
}

function App({ placesCount }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage placesCount={placesCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Room}
            element={<RoomPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
