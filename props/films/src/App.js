import './App.css';
import Stars from './components/Stars';


function App() {
  return (
    <div className="App">
      <Stars count={5}/>
      <br/>
      <Stars count={1}/>
    </div>
  );
}

export default App;
