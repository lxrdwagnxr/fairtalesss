import "./Styles/App.css";
import Header from "./Components/Header";
import FairTaleList from "./Components/FairTaleList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TalesPage from './Pages/TalesPage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer'

import FairyTaleStory from './Components/FairyTaleStory'; // Добавили импорт компонента FairyTaleStory

function App() {
    return (
        <Router>
            <main>
                <Header />
                <Routes>
                    <Route path="/" element={<FairTaleList />} />
                    <Route path="/story/:taleId" element={<FairyTaleStory />} />
                    <Route path="/tales" element={<TalesPage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </main>
        </Router>
    );
}

export default App;
