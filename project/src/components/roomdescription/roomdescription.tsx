import RoomPropertyFeatures from '../roomproperty-features/roomproperty-features';
import RoomPropertyHost from '../roomproperty-host/roomproperty-host';
import RoomPropertyInside from '../roomproperty-inside/roomproperty-inside';
import RoomPropertyMark from '../roomproperty-mark/roomproperty-mark';
import RoomPropertyName from '../roomproperty-name/roomproperty-name';
import RoomPropertyPrice from '../roomproperty-price/roomproperty-price';
import RoomPropertyRating from '../roomproperty-rating/roomproperty-rating';
import RoomPropertyReviews from '../roomproperty-reviews/roomproperty-reviews';

function RoomDescription(): JSX.Element {
  return (


    <div className="property__container container">
      <div className="property__wrapper">

        <RoomPropertyMark />
        <RoomPropertyName />
        <RoomPropertyRating />
        <RoomPropertyFeatures />
        <RoomPropertyPrice />
        <RoomPropertyInside />
        <RoomPropertyHost />
        <RoomPropertyReviews />
      </div>
    </div>

  );
}

export default RoomDescription;
