import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataTablePage from "./pages/DataTablePage";
import './App.css';
import LoginPage from "./pages/UserPage/LoginPage";
import Page2 from "./pages/UserPage/Page2";
import Page3 from "./pages/UserPage/Page3";
import Home from "./pages/Home";
import AdminConfigPage from "./pages/AdminConfigPage";
import ThankYouPage from "./pages/UserPage/ThankyouPage";
import { OnboardingProvider } from "./context/onBoardingContext";

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/api/data" element={<DataTablePage />} />
        <Route path="/api/auth" element={<LoginPage/>}/>

        <Route
          path="/api/auth/step2"
          element={
            <OnboardingProvider>
              <Page2 />
            </OnboardingProvider>
          }
        />
        <Route
          path="/api/auth/step3"
          element={
            <OnboardingProvider>
              <Page3 />
            </OnboardingProvider>
          }
        />
        <Route path="/api/admin" element={<AdminConfigPage/>}/>
        <Route path="/api/auth/submitted" element={<ThankYouPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
