import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import PlayerCart from './components/PlayerCart/PlayerCart';

function App() {

  const [players, setPlayers] = useState([]);
  const [playerCart, setPlayerCart] = useState([]);


  useEffect(() => {
    fetch('https://api.mocki.io/v1/3bb83171')
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.log(error))
  }, [])

  const handleAddPlayer = (player) => {
    const newPlayerCart = [...playerCart, player];
    setPlayerCart(newPlayerCart);
  }
  return (
    <div className="App">
      <Header></Header>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-8">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id} ></Player>)
            }
            </div>
          </div>
          <div className="col-4">
            <PlayerCart player={playerCart}></PlayerCart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
