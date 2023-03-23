import { RoomDetail } from '../../types/types';

type MainPageProps = {

  allRooms: RoomDetail;
}

function RoomPropertyPrice({ allRooms }: MainPageProps): JSX.Element {

  const { price } = allRooms;

  return (

    <div className="property__price">
      <b className="property__price-value">&euro;{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>

  );
}

export default RoomPropertyPrice;
