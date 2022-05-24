import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [status, setStatus] = useState('');
  const [reverse, setReverse] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    axios('/api').then(res => {
      console.log(res);
      console.log(res.withCredentials);
      if (res.withCredentials) {
        setStatus('HTTPS');
        setReverse('HTTP');
        setUrl('www.dongminhttpstest.cf:8080');
      } else {
        setStatus('HTTP');
        setReverse('HTTPS');
        setUrl('www.dongminhttpstest.cf:443');
      }
    });
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <h2>You are connected by {status} </h2>
      <p>
        Go to {reverse}: {url}
      </p>
    </>
  );
};

export default Home;
