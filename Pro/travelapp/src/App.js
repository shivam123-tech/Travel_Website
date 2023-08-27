import './App.css';
import Navbar from './Components/Navbar';
import PageFile from './Components/PageFile';
import SecPageFile from './Components/SecPageFile';
import TrendingDes from './Components/TrendingDes';
import TripPlanner from './Components/TripPlanner';
import Footer from './Components/Footer';
 
function App() {
  return (
    <div >
    <Navbar />
    <PageFile />
    <SecPageFile />
    <TrendingDes />
    <TripPlanner />
    <Footer />
    </div>
  );
}

export default App;
