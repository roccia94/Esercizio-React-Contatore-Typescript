import './App.css';
import Contatore from "./componente/Contatore";

function App(){
  return <div>
    <p>Componente contatore da 1</p>
    <Contatore valueStart={ 12 } />

    <p>Componente contatore da 100</p>
    <Contatore valueStart={ 100 } />
  </div>
}

export default App;
