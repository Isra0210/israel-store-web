import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
			<Announcement/>
      <Header />
			<Slider/>
			<Newsletter/>
			<Footer/>
    </div>
  );
};

export default Home;
