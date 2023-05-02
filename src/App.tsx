import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import CaloriasDiarias from "./Components/Rotas";
import Header from "./Components/Header";

const App = () => {
  return (
    <section className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="caloriasDiarias" element={<CaloriasDiarias />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
