import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="container">
      <h1>Hello From App</h1>
      <Header/>
      <Tasks/>
    </div>
  );
}

export default App;
