import { observer } from "mobx-react";
import { ChangeEvent, FormEvent } from "react";
import styles from './Header.module.scss';
import searchSettings from '../../../../assets/search_settings.svg';
import dataStore from "../../../../store/DataStore";
import logo from '../../../../assets/logo.svg';
import userIcon from "../../../../assets/login.svg";
import accountStore from "../../../../store/AccountStore";
import SignUpModal from "../../mainPage/auth/signUp/SignUpModal";
import SignInModal from "../../mainPage/auth/signIn/SignInModal";
import modalStore from "../../../../store/ModalStore";

const Header = () => {
    const { isAuthorized, userInfo } = accountStore;
    const { toggleSignUpModal } = modalStore;

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        dataStore.setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dataStore.executeSearch();
    };

    const toggleModal = () => {
        toggleSignUpModal(true);
    }

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.searchBarWrapper}>
                <img src={logo} alt="logo" width="50" height="50" />
                <form onSubmit={handleSearchSubmit} className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Что бы ты хотел посмотреть?"
                        value={dataStore.searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button type="submit">Искать</button>
                </form>
                <button className={styles.searchSettings}>
                    <img src={searchSettings} alt="search-settings" width="24" height="24" />
                </button>
            </div>
            <div className={styles.userWrapper}>
                {isAuthorized && `${userInfo.firstName} ${userInfo.lastName}`}
                <button className={styles.loginButton} onClick={toggleModal}>
                    <img src={userIcon} width="24" height="24" alt="user"/>
                </button>
            </div>
            <SignUpModal />
            <SignInModal />
        </header>
    );
};

export default observer(Header);