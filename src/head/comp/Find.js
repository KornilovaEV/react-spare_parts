import React, { useContext } from 'react';
import styles from '../Head.module.scss'
import AppContext from '../../context'

const Find = ({ onChangeSearchInput,}) => {
    const { searchValue, setSearchValue } = useContext(AppContext)


    return (
        <div>
            <input
                className={styles.search}
                onChange={onChangeSearchInput}
                value={searchValue}
                placeholder="Поиск по названию или артиклю" />
            {searchValue &&
                <img
                    onClick={() => setSearchValue('')}
                    className={styles.clear}
                    src="/img/btn-remove.svg"
                    alt="Очистить" />
            }
        </div>
    );
};

export default Find;