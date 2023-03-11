
import Header from '../../components/header/header';
import Svg from '../../components/svg/svg';
import Login from '../../components/login/login';
import {Helmet} from 'react-helmet-async';

function LoginPage(): JSX.Element {
  return (
    <section className="page page--gray page--login">
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <Svg />
      <Header />
      <Login />
    </section>
  );
}

export default LoginPage;

