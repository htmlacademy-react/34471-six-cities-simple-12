
import Header from '../../components/header/header';
import Svg from '../../components/svg/svg';
import Main from '../../components/main/main';

type AppScreenProps = {
  placesCount: number;
}

function MainPage({ placesCount }: AppScreenProps): JSX.Element {
  return (
    <section className="page page--gray page--main">

      <Svg />
      <Header />
      <Main placesCount={placesCount} />
    </section>
  );
}

export default MainPage;
