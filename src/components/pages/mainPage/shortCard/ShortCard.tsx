import React from "react";
import styles from "./ShortCard.module.scss";;
import { useNavigate } from "react-router";
import Statisctics from "../../mainPage/shortCard/Statisctics";
import dataStore from "../../../../store/DataStore";
import { observer } from "mobx-react";

export interface ShortCardProps {
    cardId: string;
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
   cardId,
   borderColor,
   title = "",
   publishedDate,
   image,
   likes = "0",
   views = "0",
   dislikes = "0",
   comments = "0",
}: ShortCardProps) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        dataStore.getVideoById(cardId);
        navigate(cardId, { state: borderColor });
    }

    return (
        <div
            className={styles.shortCardWrapper}
            style={{ "--border-color": borderColor } as React.CSSProperties}
        >
            {image
                ? <img src={image} alt="preview" width="223" height="123"/>
                : <div className={styles.imagePlaceholder}> </div>
            }
            <Statisctics
                likes={likes}
                dislikes={dislikes}
                comments={comments}
                views={views}
            />
            <h1 className={styles.title}>
                {title}
            </h1>
            <h2 className={styles.publishedDate}>
                {publishedDate}
            </h2>
            <button onClick={handleNavigate}>
                Далеe...
            </button>
        </div>
    );
}

export default observer(ShortCard);