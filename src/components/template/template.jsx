import { Header } from './../header/Header';
import { Footer } from './../footer/Footer';
import { Outlet } from 'react-router-dom';

export const Template = () => {

  return(
    <div className='wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};