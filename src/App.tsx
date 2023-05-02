import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
