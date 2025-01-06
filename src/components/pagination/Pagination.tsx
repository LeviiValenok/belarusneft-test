// components/Pagination.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./Pagination.module.scss";
import dataStore from "../../store/DataStore";
import ShortCard from "../pages/mainPage/shortCard/ShortCard"
import { colors } from "../../styles/colors";
import { DateTime } from "ts-luxon";
import shevron from "../../assets/shevron.svg";

function formatDate(isoDateString: string) {
    const dateTime = DateTime.fromISO(isoDateString, { zone: 'utc' });
    return dateTime.toFormat('dd.MM.yyyy');
}

const Pagination: React.FC = observer(() => {
    const { totalPages, videos, setCurrentPage, setItemsPerPage } =
        dataStore;

    const { page, itemsPerPage } = dataStore.pagination

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
    };

    return (
        <div>
            <div className={styles.videoList}>
                {videos.map((video) => {
                    const { statistics, snippet } = video;
                    const publishDate = formatDate(snippet.publishedAt);
                    return (
                        <ShortCard
                            key={video.id}
                            borderColor={colors.primaryColor}
                            title={snippet.title}
                            publishedDate={publishDate}
                            image={snippet.thumbnails.medium.url}
                            likes={statistics.likeCount}
                            comments={statistics.commentCount}
                            dislikes={statistics.dislikeCount}
                            views={statistics.viewCount}
                        />
                    )
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
                        {[12, 20, 32, 56].map((option) => (<option key={option} value={option}>
                                {option} / page
                            </option>))}
                    </select>
                    <span className={styles.customArrow}>
                        <img src={shevron} alt="shevron-icon"/>
                    </span>
                </div>
            </div>
        </div>);
});

export default Pagination;
