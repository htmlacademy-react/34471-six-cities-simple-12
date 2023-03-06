import RoomNearPlaces from '../roomnearplaces/roomnearplaces';
import RoomMap from '../roommap/roommap';
import RoomGallery from '../roomgallery/roomgallery';
import RoomDescription from '../roomdescription/roomdescription';

function Room(): JSX.Element {
  return (
    <main className="page__main page__main--property">
      <section className="property">
        < RoomGallery />

        < RoomDescription />

        < RoomMap />
      </section>
      <div className="container">
        < RoomNearPlaces />
      </div>
    </main>


  );
}

export default Room;
