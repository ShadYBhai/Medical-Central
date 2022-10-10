import HomeScreen from "./screens/HomeScreen";
import GlobalStyle from "./components/GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./screens/Cart";
import SellPage from "./screens/SellPage";
// import { CategoriesScreen } from "./screens/CategoriesScreen";
import VitaminPage from "./components/subCategories/VitaminPage";
import SyringePage from "./components/subCategories/SyringePage";
import InstrumentPage from "./components/subCategories/InstrumentPage";
import TabletsPage from "./components/subCategories/TabletsPage";
import LogIn from "./screens/Login";
import SignUp from "./screens/SignUp";
import CategoriesScreen from "./components/CategoriesScreen";
import ProductDetails from "./screens/ProductDetails";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sell" element={<SellPage />} />
        {/* <Route path="/categories/" element={<CategoriesScreen />} /> */}
        <Route path="/medicine" element={<TabletsPage />} />
        <Route path="/vitamin" element={<VitaminPage />} />
        <Route path="/syringe" element={<SyringePage />} />
        <Route path="/instrument" element={<InstrumentPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/categories" element={<CategoriesScreen />} />
        <Route path="/productDetail" element={<ProductDetails />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
