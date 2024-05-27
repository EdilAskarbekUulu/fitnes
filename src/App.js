import { Route, Routes } from "react-router-dom";
import Footer from "./companents/footer/footer";
import Header from "./companents/header/header";
import Sections from "./companents/sections/sections";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Sections/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
