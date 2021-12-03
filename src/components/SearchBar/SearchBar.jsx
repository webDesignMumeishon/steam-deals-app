import React from 'react'
import styles from './SearchBar.module.css'


const SearchBar = ({handleInput}) => {
    return (
        <div className={styles.form}>
            <input placeholder=" " onChange={handleInput} id="up" name="up" type="text" className={styles.inputBox}/>
            <label className={styles.labelForm} htmlFor="up">Search Game</label>
        </div>
    )
}

export default React.memo(SearchBar)
