import { useState } from 'react';
import Card from '../card/card';
import { RoomDetail } from '../../types/types';

type OfferCardsProps = {
  allRooms: RoomDetail[];
};

function OffersList({ allRooms }: OfferCardsProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(-1);

  return (
    <>
      {allRooms.map((offer) => (
        <Card
          activeCard={activeCard}
          key={`${offer.id}`}
          allRooms={offer}
          getHoverEffect={(id: number) => setActiveCard(id)}
        />
      )
      )}
    </>
  );
}

export default OffersList;
