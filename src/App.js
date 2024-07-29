import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./component/Layout/MainLayout";
import MainPage from "./component/page/MainPage/MainPage";
import PortfolioPage from "./component/page/PortfolioPage/PortfolioPage";
import CompanyPage from "./component/page/CompanyPage/CompanyPage";
import ContactPage from "./component/page/ContactPage/ContactPage";
import ScrollToTop from "./controller/ScrollToTop";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<MainLayout/>}>
            <Route path='/*' element={<MainPage/>}></Route>
            <Route path='/intro' element={<CompanyPage/>} />
            <Route path='/portfolio' element={<PortfolioPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Route>
      </Routes>
      <ScrollToTop/>
    </BrowserRouter>
  );
}

export default App;
