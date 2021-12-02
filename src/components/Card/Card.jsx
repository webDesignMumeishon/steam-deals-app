import React from 'react'
import styles from './Card.module.css'

export const Card = ({title, savings, thumb, steamRatingPercent, salePrice, normalPrice}) => {
    return (
        <div className={styles.cardContainer}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iste assumenda
             consequuntur libero! Veniam rerum dolores, magnam ipsam facilis pariatur fugiat
              quidem nam incidunt nobis ducimus porro! Ullam, accusamus mollitia!
            {/* <div style={styles.subContainer}>
                adsdsadsadsdasd
                asdsadas
            </div> */}
        </div>
    )
}
