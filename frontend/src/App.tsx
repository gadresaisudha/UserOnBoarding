import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataTablePage from "./pages/DataTablePage";
import './App.css';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="api/data" element={<DataTablePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
