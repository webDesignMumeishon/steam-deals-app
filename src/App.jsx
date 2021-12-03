import './App.css';
import React, {useState, useEffect, useCallback} from 'react';
import {FetchData} from './components/hooks/FetchData'
import { CardsDeals } from './components/CardsDeals/CardsDeals';
import SearchBar from './components/SearchBar/SearchBar'
import {CartItems} from './components/CartItems/CartItems'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Loader from "react-loader-spinner";

function App() {
  const fetchInitialSteamDeals = FetchData()
  
  //states
  const [deals, setDeals] = useState([])
  const [openCart, setOpenCart] = useState(false)
  const [dealsInCart, setDealsInCart] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setDeals(() => fetchInitialSteamDeals.data)

    const timer = setTimeout(() => {
      setIsLoading(() => fetchInitialSteamDeals.loading)
    }, 1500)

    return () => clearTimeout(timer);

  }, [fetchInitialSteamDeals])


  const handleInput = (e) => {
    const nameOfGame = e.target.value 
    const filteredGames = fetchInitialSteamDeals.data.filter(game => game.title.toLowerCase().includes(nameOfGame))
    setDeals(() => filteredGames)
  }

  const handleCartWindow = () => {
    setOpenCart((prev) => !prev)
  }

  const addDealToCart = useCallback((gameID) => {
    const [newDealToAdd] = fetchInitialSteamDeals.data.filter(deal => deal.gameID === gameID)
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
  }, [dealsInCart, fetchInitialSteamDeals.data])

  const removeFromCart = useCallback((gameID) => {
    const filteredArr = dealsInCart.filter(deal => deal.gameID !== gameID)
    setDealsInCart(() => filteredArr)
  }, [dealsInCart])

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

      {isLoading 
        ?
        <div className="loader-spiner">
          <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} /> 
        </div> 
        :
        <CardsDeals 
          deals={deals}
          addDealToCart={addDealToCart}
        />
      }
    </div>
  );
}

export default App;
