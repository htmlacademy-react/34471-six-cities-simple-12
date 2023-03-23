import Header from '../../components/header/header';
import Svg from '../../components/svg/svg';
import Room from '../../components/room/room';
import { Helmet } from 'react-helmet-async';
import { RoomDetail } from '../../types/types';

type AppScreenProps = {
  allRooms: RoomDetail;
}

function RoomPage({ allRooms }: AppScreenProps): JSX.Element {

  return (
    <div className="page">
      <Helmet>
        <title>property</title>
      </Helmet>
      <Svg />
      <Header />
      <Room allRooms={allRooms} />
    </div>
  );
}

export default RoomPage;
