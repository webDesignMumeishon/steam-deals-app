import React from 'react'
import styles from './CartItems.module.css'

export const CartItems = ({open, handleCartWindow, deals, removeFromCart}) => {

    const handleContainerClick = (e) => e.stopPropagation();

    const totalCheckoutValue = deals.reduce((acc, curr) => {
        return Number(curr.salePrice) + acc
    }, 0)


    if(open){
        return (
            <div className={styles.cartContainer} onClick={() => handleCartWindow()}>
                <div onClick={handleContainerClick} className={styles.cartSubContainer}>

                    <h1>Your Shopping Cart</h1>

                    {deals.length > 0 && deals.map(d => (
                        <div className={styles.dealWrapper}>
                            <p className={styles.title}>{d.title}</p>
                            <p>${d.salePrice}</p>
                            <button className={styles.btn} onClick={() => removeFromCart(d.gameID)}>x</button>
                        </div>
                    ))}

                    <div className={styles.totalWrapper}>
                        <p>TOTAL:</p>
                        <p>${Math.round(totalCheckoutValue)}</p>
                    </div>

                </div>
            </div>
        )
    }
    else{
        return null
    }
  
}
