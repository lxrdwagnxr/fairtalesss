import "./App.css";
import Header from "./Header";
import FairTaleList from "./FairTaleList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TalesPage from './TalesPage';
import AboutUsPage from './AboutUsPage';
import ContactPage from './ContactPage';
import Footer from './Footer'

import FairyTaleStory from './FairyTaleStory'; // Добавили импорт компонента FairyTaleStory

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
