import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Header } from './../components/header/Header';


export const NotFoundPage = () => {
  const error = useRouteError();
  console.error(error);

  return(
    <>
      <Header />
      <div className="container">
        <div className="content">
          <h1>Страница не найдена</h1>
          <p>Ошибка <b>{error.status}</b></p>
          <br />
          <p>Вернуться на <Link to="/">главную</Link> страницу</p>
        </div>
      </div>   
    </>
  )
}