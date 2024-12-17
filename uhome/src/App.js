import React, { useState, useEffect } from 'react';

function App() {
    const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme"));
    const [aboutContent, setAboutContent] = useState("");
    const [projectsContent, setProjectsContent] = useState("");

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    // Simulate dynamic content loading for About and Projects sections
    useEffect(() => {
        // Fetch or dynamically set content for the About section
        setAboutContent("Welcome to our landing page! We are excited to showcase our projects and skills here.");

        // Fetch or dynamically set content for the Projects section
        setProjectsContent("Project 1: React Dynamic Landing Page\nProject 2: API-driven Content Loader\nProject 3: Theme Switcher Demo");
    }, []);

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">MyLandingPage</a>
                    <button className="btn" onClick={toggleTheme}>
                        <i className={`bi ${theme === "light" ? "bi-moon-fill" : "bi-sun-fill"}`}></i>
                    </button>
                </div>
            </nav>
            
            <header className="container my-5 text-center">
                <h1>Welcome to Our Site</h1>
                <p>Your journey starts here.</p>
            </header>
            
            <section className="container my-5">
                <h2>About Us</h2>
                <p>{aboutContent}</p>
            </section>

            <section className="container my-5">
                <h2>Our Projects</h2>
                <p>{projectsContent}</p>
            </section>

            <footer className="container text-center py-4">
                <p>© 2024 MyLandingPage. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default App;
