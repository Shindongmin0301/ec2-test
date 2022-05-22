import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<h1>Layout</h1>}>
          <Route path="/user" element={<h2>User page</h2>} />
          <Route path="/about" element={<h1>About pagr</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
