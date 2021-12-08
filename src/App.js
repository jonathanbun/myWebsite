import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Particles from "react-tsparticles";

function App() {
  return (
    <>
       <Particles
      
      options={{
        
          
          
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          
        },
        detectRetina: true,
      }}
    />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
