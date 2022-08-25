import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Food from "./Pages/Food";
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Pasta from "./Pages/Pasta";
import Pizza from "./Pages/Pizza"
import Salads from "./Pages/Salads"
import Dessert from "./Pages/Dessert"
import Fruit from "./Pages/Fruit"
import Searched from "./Pages/Searched";
import Recipe from "./Pages/Recipe";


function App() {
  return (
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="Recipe-web-app/" element={<Home />}/>
          <Route path="/pasta" element={<Pasta />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/fruit" element={<Fruit />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
