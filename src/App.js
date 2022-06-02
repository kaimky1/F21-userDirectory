import logo from './logo.svg';
import './App.css';
import data from './data/data'
import Display from './components/Display';
import Header from './components/Header';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Display></Display>
    </div>
  );
}

export default App;
