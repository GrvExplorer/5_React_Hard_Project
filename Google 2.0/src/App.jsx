import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <div className={`bg-gray-100`}>
        <div className="flex max-w-10xl mx-auto flex-col justify-between min-h-screen">
          <Navbar />
          <Router />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
