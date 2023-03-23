import { Link } from 'react-router-dom';
import { RoomDetail } from '../../types/types';

type CardProps = {
  activeCard: number;
  allRooms: RoomDetail;
  getHoverEffect: (id: number) => void;
}


function Card({ allRooms, getHoverEffect, activeCard }: CardProps): JSX.Element {

  const { isPremium, id, img, price, roomtype, title, rating } = allRooms;
  const ratingWidth = `${rating * 100 / 5}%`;


  return (
    <article className="cities__card place-card" onMouseOver={() => getHoverEffect(id)} >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ''
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${activeCard}`}>
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${activeCard}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{roomtype}</p>
      </div>
    </article>
  );
}

export default Card;

