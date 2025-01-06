import React from "react";
import styles from "./ShortCard.module.scss";
import liked from "../../../../assets/liked.svg";
import viewed from "../../../../assets/viewed.svg";
import commented from "../../../../assets/commented.svg";
import disliked from "../../../../assets/dislike.svg";

export interface ShortCardProps {
    borderColor: string;
    title: string
    publishedDate: string;
    image?: string;
    likes?: string;
    views?: string;
    dislikes?: string;
    comments?: string;
}

const ShortCard = ({
   borderColor,
   title = "",
   publishedDate = "01.01.2024",
   image,
   likes = "0",
   views = "0",
   dislikes = "0",
   comments = "0",
}: ShortCardProps) => {
    console.log(borderColor);
    return (
        <div
            className={styles.shortCardWrapper}
            style={{ "--border-color": borderColor } as React.CSSProperties}
        >
            {image
                ? <img src={image} alt="preview" width="223" height="123"/>
                : <div className={styles.imagePlaceholder}> </div>
            }
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
            <h1 className={styles.title}>
                {title}
            </h1>
            <h2 className={styles.publishedDate}>
                {publishedDate}
            </h2>
            <button>
            Далеe...
            </button>
        </div>
    );
}

export default ShortCard;