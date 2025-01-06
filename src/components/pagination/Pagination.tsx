import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./Pagination.module.scss";
import dataStore from "../../store/DataStore";
import ShortCard from "../pages/mainPage/shortCard/ShortCard"
import { DateTime } from "ts-luxon";
import shevron from "../../assets/shevron.svg";

function formatDate(isoDateString: string) {
    const dateTime = DateTime.fromISO(isoDateString, { zone: 'utc' });
    return dateTime.toFormat('dd.MM.yyyy');
}

function getBorderColor(publishDate: string) {
    const publishedDate = DateTime.fromFormat(publishDate, 'dd.MM.yyyy');
    const diffDays = DateTime.now().diff(publishedDate, 'days').days;

    return diffDays > 180
        ? '#EB5757'
        : diffDays > 30
            ? '#F2C94C'
            : diffDays > 7
                ? '#27AE60'
                : '#2F80ED';
}

const Pagination = () => {
    const { totalPages, filteredVideosList, setCurrentPage, setItemsPerPage } = dataStore;
    const { page, itemsPerPage } = dataStore.pagination;

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
    };

    return (
        <div>
            {filteredVideosList?.length === 0 ? (
               <></>
            ) : (
                <>
                    <div className={styles.videoList}>
                        {filteredVideosList.map((video) => {
                            const { statistics, snippet } = video;
                            const publishDate = formatDate(snippet.publishedAt);
                            const borderColor = getBorderColor(publishDate);
                            return (
                                <ShortCard
                                    cardId={video.id}
                                    key={video.id}
                                    borderColor={borderColor}
                                    title={snippet.title}
                                    publishedDate={publishDate}
                                    image={snippet.thumbnails.medium.url}
                                    likes={statistics.likeCount}
                                    comments={statistics.commentCount}
                                    dislikes={statistics.dislikeCount}
                                    views={statistics.viewCount}
                                />
                            );
                        })}
                    </div>
                    <div className={styles.paginationWrapper}>
                        <div className={styles.pagination}>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageClick(index + 1)}
                                    className={`${styles.pageButton} ${
                                        page === index + 1 ? styles.selectedPageButton : ""
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <div className={styles.itemsPerPage}>
                            <select
                                id="itemsPerPage"
                                value={itemsPerPage}
                                onChange={handleItemsPerPageChange}
                            >
                                {[12, 20, 32, 56].map((option) => (
                                    <option key={option} value={option}>
                                        {option} / page
                                    </option>
                                ))}
                            </select>
                            <span className={styles.customArrow}>
                                <img src={shevron} alt="shevron-icon" />
                            </span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default observer(Pagination);
