import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [status, setStatus] = useState('');
  const [reverse, setReverse] = useState('');
  const [url, setUrl] = useState('');

  const httpUrl = 'http://www.dongminhttpstest.cf:8080';
  const httpsUrl = 'https://www.dongminhttpstest.cf';
  useEffect(() => {
    axios('/api/secure').then(res => {
      console.log(res.data);
      if (res.data.secure) {
        setStatus('HTTPS');
        setReverse('HTTP');
        setUrl(httpUrl);
      } else {
        setStatus('HTTP');
        setReverse('HTTPS');
        setUrl(httpsUrl);
      }
    });
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <h2>You are connected by {status} </h2>
      Go to {reverse}: <a href={url}>{url}</a>
    </>
  );
};

export default Home;
