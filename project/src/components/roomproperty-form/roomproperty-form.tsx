import { useState, FormEvent, ChangeEvent, Fragment } from 'react';
import { RoomDetail } from '../../types/types';
const stars = [5, 4, 3, 2, 1];
type MainPageProps = {
  allRooms: RoomDetail;
};

function RoomPropertyForm({ allRooms }: MainPageProps): JSX.Element {

  const { reviews, id } = allRooms;
  const [userAnswers, setUserAnswers] = useState(['', '']);

  return (

    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        reviews.push(
          {
            id: allRooms.reviews.length,
            roomid: id,
            avatar: '',
            name: '',
            date: ['', 0],
            rating: Number(userAnswers[0]),
            text: userAnswers[1]
          }
        );

      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {stars.map((star) => {
          const keyValue = star;
          return (
            <Fragment key={keyValue} >
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={star}
                id='{star}'
                type="radio"
                onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                  const value = target.value;
                  setUserAnswers([value, ...userAnswers.slice(1)]);
                }}
              />
              <label htmlFor='{star}' className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}

      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          const value = target.value;
          setUserAnswers([...userAnswers[0], value]);
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled >Submit</button>
      </div>
    </form>

  );
}

export default RoomPropertyForm;
