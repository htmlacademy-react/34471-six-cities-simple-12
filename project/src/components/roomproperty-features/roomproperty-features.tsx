import { RoomDetail } from '../../types/types';

type MainPageProps = {

  allRooms: RoomDetail;
}

function RoomPropertyFeatures({ allRooms }: MainPageProps): JSX.Element {

  const { roomsamount, roomsguests, roomtype } = allRooms;

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
