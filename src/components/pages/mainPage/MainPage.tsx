import Header from "./header/Header.tsx";
import styles from "./mainPage.module.scss";

const MainPage = () => {
    return (
        <div className="pageWrapper">
            <Header />
            <section className={styles.cardSection}>
            </section>
        </div>
    );
}

export default MainPage;