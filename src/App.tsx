import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CaloriasDiarias from "./Components/Rotas";

const App = () => {
  return (
    <section className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="caloriasDiarias" element={<CaloriasDiarias />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
