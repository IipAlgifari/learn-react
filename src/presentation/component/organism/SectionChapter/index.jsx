import React, { useEffect, useState } from "react";
import Button from "presentation/component/atom/Button";
import formatRupiah from "core/util/formatRupiah";

const SectionChapter = () => {
  const [jumlah, setJumlah] = useState(1);
  const [total, setTotal] = useState(0);
  const harga = 500;

  const handleKurang = () => {
    const jumlahAkhir = jumlah !== 1 ? jumlah - 1 : jumlah;
    setJumlah(jumlahAkhir);
  };

  const handleTambah = () => {
    setJumlah(jumlah + 1);
  };

  useEffect(() => {
    setTotal(formatRupiah(jumlah * harga, "Rp"));
  }, [jumlah]);

  return (
    <div className="footer">
      <div className="footer__try" id="signup">
        <div className="container">
          <div className="footer__try__wrapper">
            <div className="footer__try__txt">
              <h2 className="footer__try__title">Sub total : {total}</h2>
              <p className="footer__try__desc">Get limited 1 week free try our features!</p>
            </div>
            <div className="footer__try__btn">
              <div className="footer__try__btn__item">
                <Button type="button" variant="secondary" onClick={handleKurang}>
                  Kurang
                </Button>
              </div>
              <strong>{jumlah}</strong>
              <div className="footer__try__btn__item">
                <Button type="button" variant="secondary" onClick={handleTambah}>
                  Tambah
                </Button>
              </div>
              <div className="footer__try__btn__item">
                <Button variant="arrow">Request Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionChapter;
