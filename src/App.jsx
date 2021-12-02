import './App.css';
import {FetchData} from './components/hooks/FetchData'
import { CardsDeals } from './components/CardsDeals';

function App() {

  const steamsDeals = FetchData()
  
  return (
    <>
      <CardsDeals 
        deals={steamsDeals}
      />
    </>
  );
}

export default App;
