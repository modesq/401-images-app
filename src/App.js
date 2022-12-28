import { useState } from 'react';
import './App.css';
import data from './data.json'
import { Footer } from './components/footer';
import { Cards } from './components/cards';
import { Header } from './components/header';

function App() {

  const [total, setTotal] = useState(0)

  return (
    <>
      <Header />
      <div className="App">
        <h1>Total likes: {total}</h1>
        <div className='cardsContainer'>
          {data.map(obj => {
            return (<Cards data={obj} setTotal={setTotal} total={total} />)
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;