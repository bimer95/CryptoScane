import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';


function App() {
const [coins, setCoins] = useState([]);
const [search, setSerch] = useState('')

useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res => {
    setCoins (res.data);
  }).catch(error => alert('Yoo error'));
}, [])

const handleChange = e => {
  setSerch(e.target.value)
}

const filteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <BrowserRouter>
    <div className='header' >
          <Header 
          onChange={handleChange}/>
          
          
      
          </div>
    <div className="coin-app">
      
      <div className='coin-search'>
        <form>
          <input type='text' placeholder='Search'
          className='coin-input' onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coins => {
        return (
          <Coins 
          key={coins.id}
          name={coins.name}
          image={coins.image}
          symbol={coins.symbol}
          marketcap={coins.market_cap}
          price={coins.current_price}
          priceChange={coins.price_change_percentage_24h}
          volume={coins.total_volume}/>
        )
      })}
    </div>
    
  );
  </BrowserRouter>)
}

export default App;
