import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import CaloriasDiarias from "./Components/Rotas";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <section className="container">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="caloriasDiarias" element={<CaloriasDiarias />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </section>
  );
};

export default App;
