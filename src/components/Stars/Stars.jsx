import React from 'react'
import { FaStar } from 'react-icons/fa';
import styles from './Stars.module.css'

export const Stars = ({rating}) => {


    const numberOfStars = Math.round(rating/20)
    const stars = Array(5).fill(0)

    const colors = {
        orange: "orange",
        gray: "gray"
    }

    return (
        <div className={styles.container}>
            {stars.map((_, index) => {
                return(
                    <FaStar
                    size={20}
                    key={index}
                    color = {index < numberOfStars ? colors.orange : colors.gray}
                    />
                )
            })}
        </div>
    )
}
