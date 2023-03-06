
import Header from '../../components/header/header';
import Svg from '../../components/svg/svg';
import Login from '../../components/login/login';

function LoginPage(): JSX.Element {
  return (
    <section className="page page--gray page--login">

      <Svg />
      <Header />
      <Login />
    </section>
  );
}

export default LoginPage;

