import RoomPropertyFeatures from '../roomproperty-features/roomproperty-features';
import RoomPropertyHost from '../roomproperty-host/roomproperty-host';
import RoomPropertyInside from '../roomproperty-inside/roomproperty-inside';
import RoomPropertyName from '../roomproperty-name/roomproperty-name';
import RoomPropertyPrice from '../roomproperty-price/roomproperty-price';
import RoomPropertyRating from '../roomproperty-rating/roomproperty-rating';
import RoomPropertyReviews from '../roomproperty-reviews/roomproperty-reviews';
import RoomPropertyForm from '../roomproperty-form/roomproperty-form';
import RoomNearPlaces from '../roomnearplaces/roomnearplaces';
import RoomMap from '../roommap/roommap';
import { RoomDetail } from '../../types/types';

type MainPageProps = {
  allRooms: RoomDetail;
}

function Room({ allRooms }: MainPageProps): JSX.Element {

  const {isPremium, images } = allRooms;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((image) => (
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Studio-1" />
              </div>
            )
            )}
          </div>
        </div>

        <div className="property__container container">
          <div className="property__wrapper">

            {
              isPremium ? (
                <div className="property__mark" >
                  <span>Premium</span>
                </div>
              ) : (
                ''
              )
            }
            <RoomPropertyName allRooms={allRooms} />
            <RoomPropertyRating allRooms={allRooms} />
            <RoomPropertyFeatures allRooms={allRooms} />
            <RoomPropertyPrice allRooms={allRooms} />
            <RoomPropertyInside allRooms={allRooms} />
            <RoomPropertyHost allRooms={allRooms} />

            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{allRooms.reviews.length}</span></h2>
              <RoomPropertyReviews allRooms={allRooms} />
              <RoomPropertyForm allRooms={allRooms} />
            </section>

          </div>
        </div>

        < RoomMap />
      </section>
      <div className="container">
        < RoomNearPlaces />
      </div>
    </main>

  );
}

export default Room;
