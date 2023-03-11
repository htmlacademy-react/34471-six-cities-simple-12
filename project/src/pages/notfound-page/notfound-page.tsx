
import Header from '../../components/header/header';
import Svg from '../../components/svg/svg';
import {Helmet} from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <section className="page page--gray page--main">
      <Helmet>
        <title>404</title>
      </Helmet>
      <Svg />
      <Header />
      <main className="page__main ">
        <div className="container">
          <h1>404 Not found</h1>
        </div>

      </main>
    </section>
  );
}

export default NotFoundPage;
