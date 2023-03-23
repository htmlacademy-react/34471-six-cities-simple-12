import { RoomDetail } from '../../types/types';

type MainPageProps = {
  allRooms: RoomDetail;
}

function RoomPropertyName({ allRooms }: MainPageProps): JSX.Element {
  const { title } = allRooms;

  return (

    <div className="property__name-wrapper">
      <h1 className="property__name">
        {title}
      </h1>
    </div>

  );
}

export default RoomPropertyName;
