import React, {useState} from 'react';
import ContentLoader from 'react-content-loader';
//import AppContext from './context';
import styles from './Card.module.scss';

function MobCard({
    id, 
    title, 
    image, 
    price, 
    articul, 
    manufacturer, 
    onPlus,
    added = false, 
    loading = false, 
}) {

//const { isItemAdded } = React.useContext(AppContext);
const [plus, setPlus] = useState(added);
const onClickPlus = () => {
    onPlus({id, title, image, articul, price});
    setPlus(!plus);
};

return (
    <div className={styles.mobcard}>
    {loading ? (
        <ContentLoader 
        speed={2}
        width={120}
        height={175}
        viewBox="0 10 120 175"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        >
        <rect x="0" y="100" rx="5" ry="5" width="120" height="25" /> 
        <rect x="0" y="130" rx="5" ry="5" width="82" height="20" /> 
        <rect x="0" y="155" rx="5" ry="5" width="82" height="20" /> 
        <rect x="87" y="140" rx="15" ry="10" width="32" height="32" /> 
        <rect x="0" y="0" rx="8" ry="8" width="120" height="90" />
        </ContentLoader>
    ) : (
        <>
        <img width='90%' height={75} src={image ? image : '/img/no_icon.svg'} alt="Producrs" />
        <span><b>{title}</b></span>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
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
                alt="Плюс"
            />)}
        </div>
        </>
    )}
    </div>
);
}

export default MobCard;
