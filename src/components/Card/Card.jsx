import React from 'react'
import styles from './Card.module.css'
import { Stars } from '../Stars/Stars'

export const Card = ({title, savings, thumb, steamRatingPercent, salePrice, normalPrice}) => {
    
    const savingPercentage = Math.round(Number(savings))

    return (
        <div className={styles.cardContainer}>
            <div className={styles.subContainer}>

            <div className={styles.imgContainer}>
                <div className={styles.savings}>
                    <span >{savingPercentage}%off</span>
                </div>
                <img src={thumb} alt="dealImage" />
            </div>

            <div className={styles.titleWrapper}>
                <p className={styles.title}>{title}</p>
            </div>

            <p className={styles.steamReview}>Steam Review</p>

            <Stars rating={steamRatingPercent}/>

            <button className={styles.btn}>
                <span className={styles.normalPrice}>${normalPrice}</span> 
                <span className={styles.salePrice}>${salePrice}</span>
            </button>

            </div>
        </div>
    )
}
