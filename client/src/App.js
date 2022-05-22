import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<h1>User page</h1>} />
          <Route path="/about" element={<h1>About page</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
