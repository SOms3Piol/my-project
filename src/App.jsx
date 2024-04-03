import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import SingleProduct from './pages/SingleProduct'
import About from "./pages/About";
function App(){
  return(
    <Router>
      <Navbar />
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/shop" element={<Shop />} />
         <Route path="/SingleProduct" element={<SingleProduct />} />
         <Route path="/About" element={<About />} />
       </Routes>
      <Footer />
    </Router>
  )
}
export default App;