import { useParams } from 'react-router-dom';
import { RoomDetail } from '../../types/types';

type MainPageProps = {

  allRooms: RoomDetail[];
}

function RoomPropertyInside({ allRooms }: MainPageProps): JSX.Element {

  const { id } = useParams<string>();

  const currentRoom = allRooms.find((room) => room.id === Number(id)) as RoomDetail;

  const { items } = currentRoom;

  return (

    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">


        {items.map((item) => (

          <li key={item} className="property__inside-item">
            {item}
          </li>


        )
        )}


      </ul>
    </div>

  );
}

export default RoomPropertyInside;
