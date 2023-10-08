import './App.css';
import {  TestiCompo } from './component/Testi-compo';





function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de nosotros:</h1>

        <TestiCompo/>
      </div>
    </div>
  );
}

export default App;
