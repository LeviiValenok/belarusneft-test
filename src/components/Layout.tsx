import Header from "./pages/mainPage/header/Header";
import { Outlet } from "react-router";
import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={styles.pageWrapper}>
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout;