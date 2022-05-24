import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    axios('/api').then(res => console.log(res));
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <h2>You are use </h2>
    </>
  );
};

export default Home;
