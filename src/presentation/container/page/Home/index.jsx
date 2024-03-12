// -- core
import { useState, useEffect } from "react";

// -- data Product
// import dataProduct from "./dummy/dataProduct";

// -- component
import Default from "presentation/component/template/Default";
import SectionProductCard from "presentation/component/organism/SectionProductCard";
import SectionHelp from "presentation/component/organism/SectionHelp";
import SectionBanner from "presentation/component/organism/SectionBanner";

// -- library
import axios from "axios";

// -- react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// -- react-datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Search from "presentation/component/organism/Search";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [dataNewProduct, setDataNewProduct] = useState([]);
  useEffect(() => {
    //   // -- Call by axios
    axios({
      method: "get",
      url: "https://dummyjson.com/quotes",
    }).then((response) => {
      console.log("response", response);
    });

    // setDataNewProduct(dataProduct);
    fetch("https://x-api.alpha-x.id/v1/product")
      .then((response) => response.json())
      .then((data) => {
        setDataNewProduct(data.data);
      });
  }, []);

  return (
    <Default>
      <div className="container">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <Slider {...settings}>
          <div className="carousel-item">
            <img src="asset/img/dummy/dummy01.png" alt="dummy01.png" />
            <div className="carousel-text">
              <div className="container">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nulla.</h3>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="asset/img/dummy/dummy01.png" alt="dummy01.png" />
            <div className="carousel-text">
              <div className="container">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nulla.</h3>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="asset/img/dummy/dummy01.png" alt="dummy01.png" />
            <div className="carousel-text">
              <div className="container">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nulla.</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <SectionProductCard title="New product" data={dataNewProduct} />

      <SectionBanner/>

      <SectionHelp
        image="asset/img/dummy/dummy02.png"
        title="We are a high-level data storage bank"
        description="The place to store various data that you can access at any time through the internet and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse."
      />

      <Search/>
    </Default>
  );
};

export default Home;
