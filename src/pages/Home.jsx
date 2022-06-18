import { CartState } from "../context/Context";
import Filters from "../components/Filters";
import SingleProduct from "../components/SingleProduct";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  const {
    state: { products },
    productState: { sort },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    return sortedProducts;
  };

  return (
    <div>
			<Announcement/>
      <Header />
      {/* <Filters />
      <div>
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div> */}
			<Footer/>
    </div>
  );
};

export default Home;
