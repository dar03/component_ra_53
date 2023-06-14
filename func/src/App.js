import logo from './logo.svg';
import './App.css';
import './css/main.css'
import { ShopItemFunc } from './components/ShopItemFunc';
import { ShopItemClass } from './components/ShopItemClass';
import { Calendar } from './components/Calendar';

const now = new Date(2017, 2, 8);

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        {/* <ShopItemFunc /> */}
        {/* <ShopItemClass /> */}
        <Calendar date={now}/> 
        {/*  */}
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}


export default App;
