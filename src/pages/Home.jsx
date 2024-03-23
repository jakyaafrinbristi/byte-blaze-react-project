import Hero from "../components/Hero"
import wave from "../assets/wave.svg"


const Home = () => {
    return (
        <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-145px)]">
          
           <Hero></Hero>
           <img className="absolute w-full bottom-0" src={wave} alt="" />
        </div>
    );
};

export default Home;