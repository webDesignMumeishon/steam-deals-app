import './App.css';
import React, {useState, useEffect} from 'react';
import {FetchData} from './components/hooks/FetchData'
import { CardsDeals } from './components/CardsDeals/CardsDeals';
import {SearchBar} from './components/SearchBar/SearchBar'
import {Message} from './components/Message/Message'
import {CartItems} from './components/CartItems/CartItems'

function App() {

  const fetchInitialSteamDeals = FetchData()

  //states
  const [deals, setDeals] = useState([])
  const [openCart, setOpenCart] = useState(false)

  useEffect(() => {
    setDeals(() => fetchInitialSteamDeals )
  }, [fetchInitialSteamDeals])

  const handleInput = (e) => {
    const nameOfGame = e.target.value 
    const filteredGames = fetchInitialSteamDeals.filter(game => game.title.toLowerCase().includes(nameOfGame))
    setDeals(() => filteredGames)
  }
  
  return (
    <div className="containerApp">
      <SearchBar handleInput={handleInput}/>
      <CartItems/>
      
      {deals.length === 0 ? 
        <Message/> : 
        <CardsDeals 
          deals={deals}
        />
      }
    </div>
  );
}

export default App;
