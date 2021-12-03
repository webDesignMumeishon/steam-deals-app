import React from 'react'
import {Card} from '../Card/Card'
import styles from './CardsDeals.module.css'
import { Message } from '../Message/Message'

export const CardsDeals = ({deals, addDealToCart}) => {
    
    
    return (
        <div className={styles.container}>
            {deals.length > 0 ? deals.map(deal => ( 
                <Card 
                    key = {deal.steamAppID}
                    title={deal.title}
                    addDealToCart={addDealToCart}
                    dealID = {deal.dealID}
                    storeID = {deal.storeID}
                    gameID = {deal.gameID}
                    salePrice = {deal.salePrice}
                    normalPrice = {deal.normalPrice}
                    savings  = {deal.savings}
                    steamRatingPercent = {deal.steamRatingPercent}
                    dealRating = {deal.dealRating}
                    thumb = {deal.thumb}
                />
            )) :
            <Message/>
            }

        </div>
    )
}
