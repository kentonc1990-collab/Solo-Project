import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Adjust path to where Home.jsx is saved (e.g., "./Home" or "./components/Home")
// import Contact from "./pages/Contact"; // Uncomment when you create your contact page
import Contact from "./pages/Contact"; // Adjust path to where Contact.jsx is saved (e.g., "./Contact" or "./components/Contact")
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* This tells React: When user visits the home page (" / "), load Home.jsx */}
                <Route path="/" element={<Home />} />

                {/* <Route path="/contact" element={<Contact />} /> */}
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
