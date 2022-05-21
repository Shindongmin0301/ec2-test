import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/user" element={<h1>User page</h1>} />
        <Route path="/about" element={<h1>About pagr</h1>} />
      </Routes>
    </div>
  );
}

export default App;
