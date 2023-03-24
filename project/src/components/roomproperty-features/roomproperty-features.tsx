import { useParams } from 'react-router-dom';
import { RoomDetail } from '../../types/types';

type MainPageProps = {

  allRooms: RoomDetail[];
}

function RoomPropertyFeatures({ allRooms }: MainPageProps): JSX.Element {

  const { id } = useParams<string>();

  const currentRoom = allRooms.find((room) => room.id === Number(id)) as RoomDetail;

  const { roomsamount, roomsguests, roomtype } = currentRoom;

  return (

    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {roomtype}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {roomsamount} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {roomsguests} adults
      </li>
    </ul>

  );
}

export default RoomPropertyFeatures;
