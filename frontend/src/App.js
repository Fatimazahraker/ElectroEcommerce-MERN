import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Routes>
    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
