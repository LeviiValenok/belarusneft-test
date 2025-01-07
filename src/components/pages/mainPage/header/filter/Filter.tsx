import { ChangeEvent } from "react";
import { observer } from "mobx-react";
import styles from './Filter.module.scss';
import dataStore from "../../../../../store/DataStore";

const Filter = () => {
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        dataStore.sortByWord(event.target.value)
    };

    const toggleDatesSort = () => {
        dataStore.toggleSort('date');
    }

    const toggleViewsSort = () => {
        dataStore.toggleSort('views');
    }

    return (
        <div className={styles.filterWrapper}>
            <div className={styles.filters}>
                <h5 className={styles.preWord}>
                    Сортировать:
                </h5>
                <button
                    className={styles.textButton}
                    onClick={toggleDatesSort}
                >
                    дате
                </button>
                <button
                    className={styles.textButton}
                    onClick={toggleViewsSort}
                >
                    просмотрам
                </button>
            </div>
            <div className={styles.searchBarWrapper}>
                <h5>
                    фильтровать по слову:
                </h5>
                <input
                    onChange={handleSearchChange}
                    type="text"
                />
            </div>
        </div>
    )
}

export default observer(Filter);