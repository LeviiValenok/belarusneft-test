import styles from "./NotFound.module.scss";
import notfound from "../../../assets/notfound.svg";
import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();

    const handleNavigate = () => navigate("/");

    return (
        <div className={styles.pageWrapper}>
           <div className={styles.message}>
               <img src={notfound} width="100" height="100" alt="notfound" />
               <h2>
                   Что-то пошло не так...
               </h2>
           </div>
            <button className={styles.textButton} onClick={handleNavigate}>
                Вернуться на главную
            </button>
        </div>
    )
}

export default NotFound;