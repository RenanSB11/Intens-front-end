import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UsuariosPage from './pages/Usuarios';
import HomePage from './pages/Home';


const App = function () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/usuarios' element={<UsuariosPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
