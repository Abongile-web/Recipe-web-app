import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Food from "./Pages/Food";
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Pasta from "./Pages/Pasta";
import Pizza from "./Pages/Pizza"
import Salads from "./Pages/Salads"
import Dessert from "./Pages/Dessert"
import Fruit from "./Pages/Fruit"


function App() {
  return (
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pasta" element={<Pasta />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/fruit" element={<Fruit />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
