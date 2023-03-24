import { useParams } from 'react-router-dom';
import { RoomDetail } from '../../types/types';

type MainPageProps = {

  allRooms: RoomDetail[];
}

function RoomPropertyPrice({ allRooms }: MainPageProps): JSX.Element {

  const { id } = useParams<string>();

  const currentRoom = allRooms.find((room) => room.id === Number(id)) as RoomDetail;

  const { price } = currentRoom;

  return (

    <div className="property__price">
      <b className="property__price-value">&euro;{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>

  );
}

export default RoomPropertyPrice;
