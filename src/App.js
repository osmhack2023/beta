import "./App.css";
import Navbar from "./components/navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/redirect" element={<Formredirect />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/preevents" element={<PreEvents />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
