import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { rooms, CITY } from './mocks/offers';

const Setting = {
  PlacesCount: 312,
  allRooms: rooms,
  city: CITY,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App placesCount={Setting.PlacesCount} allRooms={Setting.allRooms} city={Setting.city} />
  </React.StrictMode>,
);
