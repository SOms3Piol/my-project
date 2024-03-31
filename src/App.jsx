import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
function App(){
  return(
    <Router>
      <Navbar />
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/shop" element={<Shop />} />
       </Routes>
      <Footer />
    </Router>
  )
}
export default App;