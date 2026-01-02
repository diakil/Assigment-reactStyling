// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/pages/Hero'; // atau sesuaikan
import Story from './components/pages/Story';
import Menu from './components/pages/Menu';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* agar tidak tertutup navbar */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Story.jsx" element={<Story />} />
          <Route path="/Menu.jsx" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;