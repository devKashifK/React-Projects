
import './App.css';
import "./index.css"
import CardGrid from './CardGrid/CardGrid';
import Category from './Category/Category';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
     <Category />
     <CardGrid />
    </div>
  );
}

export default App;
