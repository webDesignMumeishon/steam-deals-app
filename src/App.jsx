import './App.css';
import React, {useState, useEffect} from 'react';
import {FetchData} from './components/hooks/FetchData'
import { CardsDeals } from './components/CardsDeals/CardsDeals';
import {SearchBar} from './components/SearchBar/SearchBar'
import {Message} from './components/Message/Message'
import {CartItems} from './components/CartItems/CartItems'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import userEvent from '@testing-library/user-event';



function App() {

  const fetchInitialSteamDeals = FetchData()

  //states
  const [deals, setDeals] = useState([])
  const [openCart, setOpenCart] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)
  const [dealsInCart, setDealsInCart] = useState([])

  useEffect(() => {
    setDeals(() => fetchInitialSteamDeals)

  }, [fetchInitialSteamDeals])

  const handleInput = (e) => {
    const nameOfGame = e.target.value 
    const filteredGames = fetchInitialSteamDeals.filter(game => game.title.toLowerCase().includes(nameOfGame))
    setDeals(() => filteredGames)
  }

  const handleCartWindow = () => {
    setOpenCart((prev) => !prev)
  }


  const addDealToCart = (gameID) => {
    const [newDealToAdd] = fetchInitialSteamDeals.filter(deal => deal.gameID === gameID)
    const checkIfIsInCart = dealsInCart.find(deal => deal.gameID === newDealToAdd.gameID)

    if(checkIfIsInCart){
      return null
    }

    setDealsInCart((prev) => {
      return [
        ...prev,
        newDealToAdd
      ]
    })
  }

  const removeFromCart = (gameID) => {
    const filteredArr = dealsInCart.filter(deal => deal.gameID !== gameID)
    setDealsInCart(() => filteredArr)
  }

  if(isLoading){
    return <h1>LOADING</h1>
  }

  
  return (
    <div className="containerApp">

      <div className="icon-wrapper">
        <AiOutlineShoppingCart onClick={() => handleCartWindow()} className="cart-style"/>
        {dealsInCart.length > 0 && <span className="cart-notification">{dealsInCart.length}</span>}
      </div>

      <SearchBar handleInput={handleInput}/>
      <CartItems 
        open={openCart} 
        handleCartWindow={handleCartWindow} 
        deals={dealsInCart} 
        removeFromCart={removeFromCart} 
      />

      {deals.length === 0 ? 
        <Message/> : 
        <CardsDeals 
          deals={deals}
          addDealToCart={addDealToCart}
        />
      }
    </div>
  );
}

export default App;
