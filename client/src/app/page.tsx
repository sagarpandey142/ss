import Navbar from '../components/commonPage/Navbar'
import 'tailwindcss/tailwind.css';
import HomePage from "../components/pages/HomePage"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage/>
    </div>
  );
};

export default Home;