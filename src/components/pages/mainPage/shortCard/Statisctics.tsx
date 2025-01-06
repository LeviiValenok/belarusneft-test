import React from "react";
import styles from "../shortCard/ShortCard.module.scss";
import viewed from "../../../../assets/viewed.svg";
import liked from "../../../../assets/liked.svg";
import disliked from "../../../../assets/dislike.svg";
import commented from "../../../../assets/commented.svg";

interface StatisticsProps {
    likes?: string;
    views?: string;
    dislikes?: string;
    comments?: string;
}

const Statisctics = ({
    likes, views, dislikes, comments
}: StatisticsProps) => {
    return (
        <div className={styles.rateSectionWrapper}>
            <div className={styles.rate}>
                <img src={viewed} alt="viewd" width="20" height="13"/>
                <h3>{views}</h3>
            </div>

            <div className={styles.rate}>
                <img src={liked} alt="liked" width="20" height="13"/>
                <h3>{likes}</h3>
            </div>

            <div className={styles.rate}>
                <img src={disliked} alt="disliked" width="20" height="13"/>
                <h3>{dislikes}</h3>
            </div>

            <div className={styles.rate}>
                <img src={commented} alt="commented" width="20" height="13"/>
                <h3>{comments}</h3>
            </div>
        </div>
    )
};

export default Statisctics;