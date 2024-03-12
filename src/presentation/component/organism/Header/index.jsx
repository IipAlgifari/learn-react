import { Link } from "react-router-dom";

// component
import Button from "presentation/component/atom/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo" to="/">
            <img className="header__logo__img" src="asset/img/logo/data-warehouse01.png" alt="data-warehouse" />
          </Link>
          <button className="burger-menu js-burger-menu" type="button">
            <span className="burger-menu__bar"></span>
            <span className="burger-menu__bar"></span>
            <span className="burger-menu__bar"></span>
          </button>
          <div className="header__nav-mobile js-header-menu">
            <ul className="header__nav">
              <li className="header__nav__item header__nav__item--active">
                <Link className="header__nav__link" to="/">
                  About
                </Link>
              </li>
              <li className="header__nav__item">
                <Link className="header__nav__link" to="/help">
                  Help
                </Link>
              </li>
              <li className="header__nav__item">
                <Link className="header__nav__link" to="/features">
                  Features
                </Link>
              </li>
              <li className="header__nav__item">
                <Link className="header__nav__link" to="/testimonials">
                  Testimonials
                </Link>
              </li>
              <li className="header__nav__item">
                <Link className="header__nav__link" to="/product">
                  Product
                </Link>
              </li>
              <li className="header__nav__item">
                <Link className="header__nav__link" to="#signup">
                  Signup
                </Link>
              </li>
            </ul>
            <div className="header__auth">
              <Button variant="arrow" link>
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
