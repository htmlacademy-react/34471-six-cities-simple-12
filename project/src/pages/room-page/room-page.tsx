
import Header from '../../components/header/header';
import Svg from '../../components/svg/svg';
import Room from '../../components/room/room';
import {Helmet} from 'react-helmet-async';

function RoomPage(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>property</title>
      </Helmet>
      <Svg />
      <Header />
      <Room />
    </div>
  );
}

export default RoomPage;
