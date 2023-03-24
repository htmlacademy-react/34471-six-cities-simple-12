import { useParams } from 'react-router-dom';
import { RoomDetail } from '../../types/types';

type MainPageProps = {

  allRooms: RoomDetail[];
}

function RoomPropertyRating({ allRooms }: MainPageProps): JSX.Element {

  const { id } = useParams<string>();

  const currentRoom = allRooms.find((room) => room.id === Number(id)) as RoomDetail;

  const { rating } = currentRoom;

  const ratingWidth = `${rating * 100 / 5}%`;
  return (

    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{ width: ratingWidth }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>

  );
}

export default RoomPropertyRating;
