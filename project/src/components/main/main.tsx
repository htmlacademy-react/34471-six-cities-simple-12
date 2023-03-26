import React, { useState } from 'react';
import OffersList from '../offerslist/offerslist';
import Locations from '../locations/locations';
import Map from '../map/map';
import { RoomDetail, City, Point } from '../../types/types';

type MainPageProps = {
  placesCount: number;
  allRooms: RoomDetail[];
  city: City;
}

function Main(props: MainPageProps): JSX.Element {

  const { placesCount, allRooms, city } = props;

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  //const onListItemHover = (listItemName: string) => {
  //  const currentPoint = allRooms.find((point) => point.location.title === listItemName);

  //  setSelectedPoint(undefined);
  //};
  if(selectedPoint) {
    setSelectedPoint(undefined);
  }


  return (

    <main className="page__main page__main--index">
      <Locations />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <OffersList allRooms={allRooms} />

            </div>
          </section>
          <div className="cities__right-section">
            <Map city={city} allRooms={allRooms} selectedPoint={selectedPoint} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
