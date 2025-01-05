import styles from './Header.module.scss';
import logo from '../../../../assets/logo.svg';
import searchSettings from '../../../../assets/search_settings.svg';

const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.searchBarWrapper}>
                <img src={logo} alt="logo" width="50" height='50'/>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search..."/>
                    <button type="submit">Search</button>
                </div>
                <button className={styles.searchSettings}>
                    <img src={searchSettings} alt="search-setting" width="24" height="24"/>
                </button>
            </div>
            <div>
                Имя Пользователя
            </div>
        </header>
    );
}

export default Header;