import React, {useState} from 'react';
import ContentLoader from 'react-content-loader';
//import AppContext from './context';
import styles from './Card.module.scss';

function CompCard({
  id, 
  title, 
  image, 
  price, 
  articul, 
  manufacturer, 
  onPlus, 
  added = false, 
  loading = false, }) {
  //const { isItemAdded } = React.useContext(AppContext);
  const [plus, setPlus] = useState(added);
  const onClickPlus = () => {
    onPlus({id, title, image, articul, price});
    setPlus(!plus);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader 
          speed={2}
          width={150}
          height={320}
          viewBox="0 10 150 320"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="155" rx="5" ry="5" width="150" height="25" /> 
          <rect x="0" y="185" rx="5" ry="5" width="82" height="25" /> 
          <rect x="0" y="220" rx="7" ry="7" width="110" height="100" /> 
          <rect x="150" y="260" rx="15" ry="10" width="32" height="32" /> 
          <rect x="0" y="0" rx="8" ry="8" width="150" height="135" />
        </ContentLoader>
      ) : (
        <>
          <img className="ml-15" width="80%" height={100} src={image ? image : '/img/no_icon.svg'} alt="Producrs" />
          <h3 className="fontSize13">{title}</h3>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span><i>Артикул:</i></span>
              <b>{articul ? articul : ""}</b>
              <span><i>Цена:</i></span>
              <b>{price} руб.</b>
              <span><i>Производитель:</i></span>
              <b>{manufacturer}</b>
            </div>

            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={plus ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                alt="Добавить"
              />
              )}
          </div>
        </>
      )}
    </div>
  );
}

export default CompCard;
