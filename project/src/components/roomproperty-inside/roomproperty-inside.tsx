import { RoomDetail } from '../../types/types';

type MainPageProps = {

  allRooms: RoomDetail;
}

function RoomPropertyInside({ allRooms }: MainPageProps): JSX.Element {

  const { items } = allRooms;

  return (

    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">


        {items.map((item, id) => (


          <li key={`${id * 100}`} className="property__inside-item">
            {item}
          </li>


        )
        )}


      </ul>
    </div>

  );
}

export default RoomPropertyInside;
