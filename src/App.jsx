import './App.css';
import React, {useState, useEffect} from 'react';
import {FetchData} from './components/hooks/FetchData'
import { CardsDeals } from './components/CardsDeals/CardsDeals';
import {SearchBar} from './components/SearchBar/SearchBar'
import {Message} from './components/Message/Message'

function App() {

  const steamsDeals = FetchData()

  const [deals, setDeals] = useState([])

  console.log(deals);

  useEffect(() => {
    setDeals(() => steamsDeals )
  }, [steamsDeals])

  const handleInput = (e) => {
    const nameOfGame = e.target.value 
    const filteredGames = steamsDeals.filter(game => game.title.toLowerCase().includes(nameOfGame))
    setDeals(() => filteredGames)
  }



  
  return (
    <div className="containerApp">
      <SearchBar handleInput={handleInput}/>
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
