import React from 'react';
import ContentLoader from 'react-content-loader';

import AppContext from './context';

import styles from './Card.module.scss';

function Card(props) {

  return (
    <div className={styles.card}>
      {props.loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
        </ContentLoader>
      ) : (
        <>

          <img width="100%" height={135} src={props.image_url ? props.image_url : '/img/no_icon.svg'} alt="Producrs" />
          <h3>{props.title}</h3>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span><i>Артикул:</i></span>
              <b>{props.articul ? props.articul : ""}</b>
              <span><i>Цена:</i></span>
              <b>{props.price} руб.</b>
              <span><i>Производитель:</i></span>
              <b>{props.manufacturer}</b>

            </div>
            <div>
              <img
                className={styles.plus}

                src='/img/btn-plus.svg'
                alt="Добавить"
              /></div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;


/*

function Card({ id, title, image_url, price, articul, onFavorite, onPlus, loading = false }) {
  const { isItemAdded, isItemFavorited } = React.useContext(AppContext);

  const onClickPlus = () => {
    onPlus({ id, title, image_url, price, articul });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, image_url, price, articul });
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img src={isItemFavorited(id) ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" />
            </div>
          )}
          <img width="100%" height={135} src={image_url ? image_url : '/img/no_icon.svg'} alt="Producrs" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Артикул:</span>
              <b>{articul ? articul : ""}</b>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
*/