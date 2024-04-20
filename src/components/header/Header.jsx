import { NavLink } from "react-router-dom";
import "./index.css";

export const Header = () => {

  return(
    <header className="header">
      <div className="container">
      <nav className="header__menu menu">
        <ul className="menu__list">
            <li className="menu__item">
              <NavLink className="menu__link" to="/">Главная</NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" to="/products">Каталог</NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" to="/comments">Отзывы</NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" to="/contacts">Контакты</NavLink>
            </li>
          </ul>
      </nav>
      </div>
    </header>
  )
};

