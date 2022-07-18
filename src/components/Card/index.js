import React, {useState} from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from './context';
import styles from './Card.module.scss';

function Card({loading = false, title, image_url, price, articul, manufacturer, onPlus}) {
  let [plus, setPlus] = useState(false);
  const onClickPlus = () => {
    setPlus(!plus)
    onPlus({title, image_url, price});
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
        </ContentLoader>
      ) : (
        <>
          <img width="100%" height={135} src={image_url ? image_url : '/img/no_icon.svg'} alt="Producrs" />
          <h3>{title}</h3>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span><i>Артикул:</i></span>
              <b>{articul ? articul : ""}</b>
              <span><i>Цена:</i></span>
              <b>{price} руб.</b>
              <span><i>Производитель:</i></span>
              <b>{manufacturer}</b>

            </div>
            <div>
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={plus ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
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
  {onPlus && (
    <img
      className={styles.plus}
      onClick={onClickPlus}
      src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
      alt="Plus"
    />
*/