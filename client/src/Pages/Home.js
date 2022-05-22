import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to={'/user'} style={{ margin: '1rem' }}>
        user
      </Link>
      <Link to={'/about'}>about</Link>
    </>
  );
};

export default Home;
