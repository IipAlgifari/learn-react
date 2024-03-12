// -- core
// import {  useEffect } from "react";

// -- data Product
// import dataProduct from "./dummy/dataProduct";

// -- hooks
import useFetch from "core/hooks/useFetch";

// -- component
import Default from "presentation/component/template/Default";
// import SectionProductCard from "presentation/component/organism/SectionProductCard";
import Filter from "presentation/component/organism/Filter";
import WidgetProduct from "infrastructure/widget/WidgetProduct";
import SectionChapter from "presentation/component/organism/SectionChapter";
import SectionQuoteCard from "presentation/component/organism/SectionQuoteCard";
import SectionPostCard from "presentation/component/organism/SectionPostCard";
import SectionLatihan from "presentation/component/organism/SectionLatihan";

// import axios from "axios";

const Home = () => {
  // const {data: getDataProduct} = useFetch("https://x-api.alpha-x.id/v1/product");
  const { data: getDataQuotes } = useFetch("https://dummyjson.com/quotes");
  const { data: getDataPosts } = useFetch("https://jsonplaceholder.typicode.com/posts");

  // const dataProduct = getDataProduct.data !== undefined ? getDataProduct.data : [];
  const dataQuotes = getDataQuotes.quotes !== undefined ? getDataQuotes.quotes : [];
  const dataPosts = getDataPosts.length !== undefined ? getDataPosts : [];

  // const [dataNewProduct, setDataNewProduct] = useState([]);
  // const [dataQuotes, setDataQuotes] = useState([]);
  // const [dataPosts, setDataPosts] = useState([]);

  // useEffect(() => {
  //   // -- Call by axios
  //   axios({
  //     method: "get",
  //     url: "https://dummyjson.com/quotes",
  //   }).then((response) => {
  //     console.log("response", response);
  //   });

  //   // setDataNewProduct(dataProduct);
  //   // fetch("https://x-api.alpha-x.id/v1/product")
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     setDataNewProduct(data.data);
  //   //     console.log(data);
  //   //   });

  //   // -- API dataQuotes
  //   // fetch("https://dummyjson.com/quotes")
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     setDataQuotes(data.quotes);
  //   //   });

  //   // -- API dataPosts
  //   // fetch("https://jsonplaceholder.typicode.com/posts")
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     let dataTemp = [];

  //   //     // Transform Data
  //   //     data.forEach((val, idx) => {
  //   //       const valTemp = {
  //   //         id: val.id,
  //   //         userId: val.userId,
  //   //         title: val.title,
  //   //         description: val.body,
  //   //       };
  //   //       dataTemp.push(valTemp);
  //   //     });

  //   //     setDataPosts(dataTemp);
  //   //   });
  // }, []);

  return (
    <Default subscription={false}>
      {/* <SectionProductCard title="New product" data={dataProduct} /> */}
      <Filter/>
      <WidgetProduct />
      <SectionQuoteCard title="Quote Hari ini" data={dataQuotes} />
      <SectionPostCard title="Berita Terupdate" data={dataPosts} />
      <SectionChapter />
      <SectionLatihan/>
    </Default>
  );
};

export default Home;
