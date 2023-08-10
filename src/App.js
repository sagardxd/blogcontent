import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Blogs } from './components/Blogs';
import { Pagination } from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';


function App() {

  const {fetchBlogsPost} = useContext(AppContext);

 useEffect( () => {
  fetchBlogsPost();
 }, []);

  return (
    <div className='w-full h-full gap-y-1 flex flex-col justify-center items-center'>
      <Header />
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;
