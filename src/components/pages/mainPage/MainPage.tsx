import Header from "./header/Header";
import styles from "./mainPage.module.scss";
import Pagination from "../../pagination/Pagination";

const MainPage = () => {
    return (
        <div className="pageWrapper">
            <Header />
            <section className={styles.cardSection}>
            </section>
            <Pagination />
        </div>
    );
}

export default MainPage;