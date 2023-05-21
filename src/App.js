import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNav from "./componetns/header/TopNav";
import MainNav from "./componetns/header/MainNav";
import Footer from "./componetns/footer/Footer";
import "./App.css";
import HomePage from "./pages/Home.page";
function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <MainNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
