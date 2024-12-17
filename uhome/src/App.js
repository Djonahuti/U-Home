import React, { useState, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderContent = () => {
    switch (currentPage) {
      case "about":
        return (
          <Suspense fallback={<div>Loading About...</div>}>
            <About />
          </Suspense>
        );
      case "projects":
        return (
          <Suspense fallback={<div>Loading Projects...</div>}>
            <Projects />
          </Suspense>
        );
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="container">{renderContent()}</main>
    </div>
  );
}

export default App;
