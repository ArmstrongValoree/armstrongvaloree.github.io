import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import BackOffice from "./pages/BackOffice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/links" element={<Links />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/backoffice" element={<BackOffice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
