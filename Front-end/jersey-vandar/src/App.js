import './App.css';
import './bootstrap_css/bootstrap.min.css';
import { HomePage } from './routes/HomePage/HomePage';
import { LoginPage } from './routes/LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { RegistrationPage } from './routes/RegistrationPage/RegistrationPage';
import { AddItemPage } from './routes/AddItemPage/AddItemPage';
import { ItemPage } from './routes/ItemPage/ItemPage';
import { MyItemsPage } from './routes/MyItemsPage/MyItemsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/addItems/:id" element={<AddItemPage />} />
        <Route path="/myItems/:id" element={<MyItemsPage />} />
      </Routes>
    </div>
  );
}

export default App;
