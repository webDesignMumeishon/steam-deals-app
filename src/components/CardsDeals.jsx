import React from 'react'
import {Card} from './Card/Card'

export const CardsDeals = ({deals}) => {
    
    const deal1 = deals[52]
    // console.log(deals);

    return (
        <div>
            {/* {deals.map(deal => ( 
                <Card 
                    title={deal.title}
                />
            ))} */}

        {deals.length > 0 &&
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
        }
       
        </div>
    )
}
