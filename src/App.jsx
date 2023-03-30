import'./Header';
import Header from './Header';
import Footer from './Footer';
import QueEsOsoji from './QueEsOsoji';
import SobreJuego from './SobreJuego';
import AcercaOsoji from './AcercaOsoji';
import Personajes from './Personajes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <QueEsOsoji/>
      <AcercaOsoji/>
      <SobreJuego/>
      <Personajes

      tituloP="Powolf"
      tituloR="Racoon"
      tituloG="Golem"

      imgPowolf="Powolf"
      imgRacoon="Racoon"
      imgGolem="Golem"
      
      imgP="Powolf-2"
      imgR="Racoon-2"
      imgG="Golem-2"
      
      pModal="Es un lobo que ha llegado al barrio 111 en compañía de Racoon con el propósito de aportar al cambio en este lugar."
      pModal2="Es un mapache que ha llegado a barrio 111 para ser parte del cambio e impulsar a la comunidad a limpiar los espacios públicos de este lugar."
      pModal3="Es un monstruo de desechos tóxicos que ha tomado vida propia, es el villano de nuestro videojuego."

      />
      <Footer/>
    </div>
  );
}

export default App;
