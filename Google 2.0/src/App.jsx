import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Footer />
          <Router />
        </div>
      </div>
    </>
  );
}

export default App;
