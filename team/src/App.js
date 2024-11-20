import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Teams from './Pages/Teams';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </main>
      </div>
    </div>
  </Router>
);

export default App;
