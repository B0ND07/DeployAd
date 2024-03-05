import "./App.css";
import NavBar from "./components/NavBar";
import BodyOne from "./components/BodyOne";
import BodyTwo from "./components/BodyTwo";
import BodyThree from "./components/BodyThree";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BodyOne />
                <BodyTwo />
                <BodyThree />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
