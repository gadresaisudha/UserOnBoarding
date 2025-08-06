import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataTablePage from "./pages/DataTablePage";
import './App.css';
import LoginPage from "./pages/UserPage/LoginPage";
import Page2 from "./pages/UserPage/Page2";
import Page3 from "./pages/UserPage/Page3";
import Home from "./pages/Home";
import AdminConfigPage from "./pages/AdminConfigPage";


function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/api/data" element={<DataTablePage />} />
        <Route path="/api/auth" element={<LoginPage/>}/>
        <Route path="/api/auth/step2" element={<Page2/>}/>
        <Route path="/api/auth/step3" element={<Page3/>}/>
        <Route path="/api/admin" element={<AdminConfigPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
