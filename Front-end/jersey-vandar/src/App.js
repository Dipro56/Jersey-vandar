import './App.css';
import './bootstrap_css/bootstrap.min.css';
import { HomePage } from './routes/HomePage/HomePage';
import { LoginPage } from './routes/LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
