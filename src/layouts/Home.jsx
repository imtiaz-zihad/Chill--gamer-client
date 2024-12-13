import Banner from "../pages/Banner";
import HighestRatedGames from "../pages/HighestRatedGames";
import TrendingGames from "../pages/TrendingGames";
import { useTypewriter,Cursor } from "react-simple-typewriter";

const Home = () => {

  const [text] = useTypewriter({
    words:['Review','Experience','Opinion','Rating'],
    loop:0,
  })
   
  return (
    <div>
     <div className="text-center text-2xl mt-5">
      <span className=""><span className="font-bold text-red-500">Welcome </span>Gamer , </span>
      <span className="">Share Your </span>
     <span className="font-bold  text-sky-600">{text}</span><Cursor/> 
     </div>
      <Banner />
      <HighestRatedGames />
      <TrendingGames />
    </div>
  );
};

export default Home;
