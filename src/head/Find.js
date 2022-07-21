import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Head.module.scss'


const Find = ({onChangeSearchInput, searchValue = "", setSearchValue}) => {
    return (
        <>
            <input 
            className={styles.search} 
            onChange={onChangeSearchInput} 
            value={searchValue} 
            placeholder="Поиск товара..."/>
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