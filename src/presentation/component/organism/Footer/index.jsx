import { Link } from "react-router-dom";

import Button from "presentation/component/atom/Button";
// import { useEffect, useState } from "react";

// -- component util
// import formatRupiah from "core/util/formatRupiah";

const Footer = () => {
  // const[stateName, methodStateName] = useState(bisa default value);
  // const [jumlah, setJumlah] = useState(1);
  // const [total, setTotal] = useState(0);
  // const harga = 500;

  // const handleKurang = () => {
  //   const jumlahAkhir = jumlah !== 1 ? jumlah - 1 : jumlah;
  //   setJumlah(jumlahAkhir);
  // };
  // const handleTambah = () => {
  //   setJumlah(jumlah + 1);
  // };

  // useEffect(() => {
  //   setTotal(formatRupiah(jumlah * harga, "Rp"));
  //   // defendensi
  // }, [jumlah]);

  return (
    <div className="footer">
      <div className="footer__try" id="signup">
        <div className="container">
          <div className="footer__try__wrapper">
            <div className="footer__try__txt">
              <h2 className="footer__try__title">Try for free!</h2>
              <p className="footer__try__desc">Get limited 1 week free try our features!</p>
            </div>
            <div className="footer__try__btn">
              <div className="footer__try__btn__item">
                <Button variant="secondary">Learn more</Button>
              </div>
              {/* <div className="footer__try__btn__item">
                <Button type="button" variant="secondary" onClick={handleKurang}>
                  Tambah
                </Button>
              </div>
              <strong>{jumlah}</strong>
              <div className="footer__try__btn__item">
                <Button type="button" variant="secondary" onClick={handleTambah}>
                  Kurang
                </Button>
              </div> */}
              <div className="footer__try__btn__item">
                <Button variant="arrow">Request Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__menu-container">
            <div className="footer__menu js-footer-accordion">
              <div className="footer__menu__wrapper">
                <h5 className="footer__menu__title">About</h5>
                <ul className="footer__nav">
                  <li className="footer__nav__item">
                    <Link className="footer__nav__link" to="#help">
                      Profile
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link className="footer__nav__link" to="#features">
                      Features
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link className="footer__nav__link" to="#testimonials">
                      Careers
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link className="footer__nav__link" to="#DwNews">
                      DW News
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu__wrapper">
                <h5 className="footer__menu__title">Help</h5>
                <ul className="footer__nav">
                  <li className="footer__nav__item">
                    <Link className="footer__nav__link" to="#home">
                      Support
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link className="footer__nav__link" to="#signIn">
                      Sign In
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link className="footer__nav__link" to="#guide">
                      Guide
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link className="footer__nav__link" to="#reports">
                      Reports
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link className="footer__nav__link" to="#q&amp;a">
                      Q&A
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__sosmed">
                <h5 className="footer__sosmed__title">Social Media</h5>
                <ul className="footer__sosmed__nav">
                  <li className="footer__sosmed__item">
                    <Link className="footer__sosmed__link footer__sosmed__link--facebook" to="#facebook">
                      <img className="footer__sosmed__img" src="asset/img/sosmed/facebook.svg" alt="facebook" />
                    </Link>
                  </li>
                  <li className="footer__sosmed__item">
                    <Link className="footer__sosmed__link footer__sosmed__link--twitter" to="#twitter">
                      <img className="footer__sosmed__img" src="asset/img/sosmed/twitter.svg" alt="twitter" />
                    </Link>
                  </li>
                  <li className="footer__sosmed__item">
                    <Link className="footer__sosmed__link footer__sosmed__link--instagram" to="#instagram">
                      <img className="footer__sosmed__img" src="asset/img/sosmed/instagram.svg" alt="instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__logo">
              <div className="footer__logo__wrapper js-footer-logo">
                <Link className="footer__logo__link" to="#home">
                  <img className="footer__logo__img" src="asset/img/logo/data-warehouse02.png" alt="data-warehouse" />
                </Link>
              </div>
              <div className="footer__desc">
                <p className="footer__address">Warehouse Society, 234 Bahagia Ave Street PRBW 29281</p>
                <p className="footer__info">info@warehouse.project 1-232-3434 (Main)</p>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <p className="footer__copyright__txt">&copy; Datawarehouse&trade;, 2020. All rights reserved. Company Registration Number: 21479524.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
