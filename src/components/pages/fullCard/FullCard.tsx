import styles from "./FullCard.module.scss";
import { useLocation, useNavigate, useParams } from "react-router";
import dataStore from "../../../store/DataStore";
import { observer } from "mobx-react";
import Statisctics from "../mainPage/shortCard/Statisctics";
import React, { useEffect } from "react";
import backArrow from "../../../assets/back.svg";
import { DateTime } from "ts-luxon";

function convertDate(isoDateString?: string) {
    if (!isoDateString) return "";
    const date = DateTime.fromISO(isoDateString, { zone: 'utc' });
    return date.setLocale('ru').toFormat('EEEE, LLLL dd, yyyy');
}

const FullCard = () => {
    const { id } = useParams();
    const { state: borderColor } = useLocation();
    const navigate = useNavigate();
    const { selectedVideo } = dataStore;

    const handleNavigateToPrePage = () => {
        navigate("/");
    }

    useEffect(() => {
        if (id) {
            dataStore.getVideoById(id);
        }
    }, [id]);

    if (!selectedVideo) {
        navigate("/notfound");
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.fullCardWrapper}>
                <button className={styles.backButton} onClick={handleNavigateToPrePage}>
                    <img src={backArrow} width="13" height="16" alt="back"/>
                </button>
                <img
                    src={selectedVideo?.snippet.thumbnails.high.url}
                    width="729"
                    height="461"
                    alt="video-preview"
                />
                <div
                    className={styles.cardInfo}
                    style={{"--border-color": borderColor} as React.CSSProperties}
                >

                    <div className={styles.cardInfoTitleWrapper}>
                        <h1>{selectedVideo?.snippet.title}</h1>
                        <h5>{convertDate(selectedVideo?.snippet.publishedAt)}</h5>
                    </div>
                    <div className={styles.descriptionSection}>
                        <div className={styles.descriptionTittle}>
                            Описание:
                            <div className={styles.description}>
                                {selectedVideo?.snippet.description}
                            </div>
                        </div>
                        <Statisctics
                            likes={selectedVideo?.statistics.likeCount}
                            dislikes={selectedVideo?.statistics.dislikeCount}
                            comments={selectedVideo?.statistics.commentCount}
                            views={selectedVideo?.statistics.viewCount}
                        />
                    </div>
                </div>
            </div>
        </div>)
}

export default observer(FullCard);
