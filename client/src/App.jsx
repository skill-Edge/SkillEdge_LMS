import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./components/Layout";
import './index.css';
import Home from "./pages/Home";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;