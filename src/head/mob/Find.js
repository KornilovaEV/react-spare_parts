import React,{useContext} from 'react';
import styles from './MenuMob.module.scss'
import AppContext from '../../context'

const Find = ({onChangeSearchInput,}) => {
    const {searchValue, setSearchValue} = useContext(AppContext)
    return (
        <>
            <input 
            className={styles.search} 
            onChange={onChangeSearchInput} 
            value={searchValue} 
            placeholder="Поиск..."/>
            {searchValue &&
                    <img                    
                    onClick={() => setSearchValue('')}
                    className={styles.clear}
                    src="/img/btn-remove.svg"
                    alt="Очистить"/>
                }   
        </>
    );
};

export default Find;