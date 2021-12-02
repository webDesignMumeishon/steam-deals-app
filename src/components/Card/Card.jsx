import React from 'react'
import styles from './Card.module.css'

export const Card = ({title, savings, thumb, steamRatingPercent, salePrice, normalPrice}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.subContainer}>

            <img src={thumb} alt="dealImage" />
            <div className={styles.titleWrapper}>
                <p className={styles.title}>{title}</p>
            </div>
            <p className={styles.steamReview}>Steam Review</p>
            <button className={styles.btn}>
                <span className={styles.normalPrice}>${normalPrice}</span> 
                <span className={styles.salePrice}>${salePrice}</span>
            </button>
            </div>
        </div>
    )
}
