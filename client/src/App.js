import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="App">
      <Layout />
      <Home />
    </div>
  );
}

export default App;
