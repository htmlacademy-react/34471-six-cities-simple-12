import { RoomDetail } from '../../types/types';

type MainPageProps = {

  allRooms: RoomDetail;
}

function RoomPropertyHost({ allRooms }: MainPageProps): JSX.Element {

  const { owner, fulldescription } = allRooms;

  return (

    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={owner.avatar} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {owner.name}
        </span>

        {
          owner.isPro ? (
            <span className="property__user-status">Pro</span>
          ) : (
            ''
          )
        }

      </div>
      <div className="property__description">
        <p className="property__text">{fulldescription} </p>
      </div>
    </div>

  );
}

export default RoomPropertyHost;
