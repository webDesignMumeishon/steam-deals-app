import React from 'react'
import {Card} from '../Card/Card'
import styles from './CardsDeals.module.css'

export const CardsDeals = ({deals}) => {
    

    return (
        <div className={styles.container}>
            {deals.length > 0 && deals.map(deal => ( 
                <Card 
                    key = {deal.steamAppID}
                    title={deal.title}
                    dealID = {deal.dealID}
                    storeID = {deal.storeID}
                    gameID = {deal.gameID}
                    salePrice = {deal.salePrice}
                    normalPrice = {deal.normalPrice}
                    isOnSale = {deal.isOnSale}
                    savings  = {deal.savings}
                    metacriticScore = {deal.metacriticScore}
                    steamRatingPercent = {deal.steamRatingPercent}
                    steamRatingCount = {deal.steamRatingCount}
                    dealRating = {deal.dealRating}
                    thumb = {deal.thumb}
                />
            ))}

        {/* {deals.length > 0 &&
            <Card 
            title={deal1.title}
            dealID = {deal1.dealID}
            storeID = {deal1.storeID}
            gameID = {deal1.gameID}
            salePrice = {deal1.salePrice}
            normalPrice = {deal1.normalPrice}
            isOnSale = {deal1.isOnSale}
            savings  = {deal1.savings}
            metacriticScore = {deal1.metacriticScore}
            steamRatingPercent = {deal1.steamRatingPercent}
            steamRatingCount = {deal1.steamRatingCount}
            steamAppID = {deal1.steamAppID}
            dealRating = {deal1.dealRating}
            thumb = {deal1.thumb}
            />
        } */}
       
        </div>
    )
}
