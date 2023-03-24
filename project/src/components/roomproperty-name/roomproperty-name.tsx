import { useParams } from 'react-router-dom';
import { RoomDetail } from '../../types/types';

type MainPageProps = {
  allRooms: RoomDetail[];
}

function RoomPropertyName({ allRooms }: MainPageProps): JSX.Element {

  const { id } = useParams<string>();

  const currentRoom = allRooms.find((room) => room.id === Number(id)) as RoomDetail;

  const { title } = currentRoom;

  return (

    <div className="property__name-wrapper">
      <h1 className="property__name">
        {title}
      </h1>
    </div>

  );
}

export default RoomPropertyName;
