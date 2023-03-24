
import Header from '../../components/header/header';
import Svg from '../../components/svg/svg';
import Main from '../../components/main/main';
import {Helmet} from 'react-helmet-async';
import {RoomDetail, City} from '../../types/types';

type AppScreenProps = {
  placesCount: number;
  allRooms: RoomDetail[];
  city: City;
}

function MainPage({ placesCount, allRooms, city }: AppScreenProps): JSX.Element {
  return (
    <section className="page page--gray page--main">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <Svg />
      <Header />
      <Main placesCount={placesCount} allRooms={allRooms} city={city} />
    </section>
  );
}

export default MainPage;
