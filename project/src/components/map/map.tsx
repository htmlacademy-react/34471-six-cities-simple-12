import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, RoomDetail, Point} from '../../types/types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../consts';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  allRooms: RoomDetail[];
  selectedPoint: Point | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

function Map(props: MapProps): JSX.Element {
  const {city, allRooms, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      allRooms.forEach((point) => {
        const marker = new Marker({
          lat: point.location.lat,
          lng: point.location.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, allRooms, selectedPoint]);


  return (

    <section className="cities__map map" style={{height: '100%'}} ref={mapRef}></section>

  );
}

export default Map;
