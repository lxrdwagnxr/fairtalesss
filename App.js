import "./App.css";
import Header from "./Header";
import FairTaleList from "./FairTaleList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FairyTaleStory from './FairyTaleStory'; // Добавили импорт компонента FairyTaleStory

function App() {
    return (
        <Router>
            <main>
                <Header />
                <Routes>
                    <Route path="/" element={<FairTaleList />} />
                    <Route path="/story/:taleId" element={<FairyTaleStory />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
