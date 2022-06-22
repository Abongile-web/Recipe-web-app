import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Food from "./Pages/Food";
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 


function App() {
  return (
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/food" element={<Food />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
