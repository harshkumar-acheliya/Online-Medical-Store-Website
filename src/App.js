import About from './component/AboutComp/About';
import Carousel from './component/Carousel/Carousel';
import Category from './component/Category/Category';
import CategoryCard from './component/Category/CategoryCard';
import ClientCard from './component/ClientTestinomial/ClientCard';
import ClientTestinomial from './component/ClientTestinomial/ClientTestinomial';
import DCard from './component/DelayOfDay/DCard';
import DelayOfDay from './component/DelayOfDay/DelayOfDay';
import DownloadApp from './component/DownloadApp/DownloadApp';
import Featured from './component/Featured/Featured';
import FeaturedCard from './component/Featured/FeaturedCard';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';

import MedicinesBrand from './component/MedicinesBrand/MedicinesBrand';
import Navbar from './component/NavComponent/Navbar';
import Recommended from './component/Recommended/Recommended';
import Signup from './component/Signup/Signup';

function App() {
  return (
    <>

      <Navbar />
      <Carousel />
      <About />
      <Category />
      <Featured />
      <Recommended />
      <DelayOfDay />
      <MedicinesBrand />
      <ClientTestinomial />
      <DownloadApp />
      <Footer />
      {/* <Signup />
      <Login /> */}
    </>
  );
}

export default App;
