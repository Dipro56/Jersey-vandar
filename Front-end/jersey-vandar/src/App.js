import './App.css';
import './bootstrap_css/bootstrap.min.css';
import { HomePage } from './routes/HomePage/HomePage';
import { LoginPage } from './routes/LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { RegistrationPage } from './routes/RegistrationPage/RegistrationPage';
import { AddItemPage } from './routes/AddItemPage/AddItemPage';
import { ItemPage } from './routes/ItemPage/ItemPage';
import { MyItemsPage } from './routes/MyItemsPage/MyItemsPage';
import { ManageItemPage } from './routes/ManageItemPage/ManageItemPage';
import { UpdateItemPage } from './routes/UpdateItemPage/UpdateItemPage';
import { Header } from './components/Header/Header';
import { RequiredAuth } from './routes/RequiredAuth/RequiredAuth';
import { InboxPage } from './routes/InboxPage/InboxPage';
import { ErrorPage } from './routes/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/item" element={<ItemPage />} />
        <Route
          path="/addItems/:id"
          element={
            <RequiredAuth>
              <AddItemPage />
            </RequiredAuth>
          }
        />
        <Route
          path="/myItems/:id"
          element={
            <RequiredAuth>
              <MyItemsPage />
            </RequiredAuth>
          }
        />
        <Route
          path="/manageItems/:id"
          element={
            <RequiredAuth>
              <ManageItemPage />
            </RequiredAuth>
          }
        />
        <Route
          path="/inbox/:id"
          element={
            <RequiredAuth>
              <InboxPage />
            </RequiredAuth>
          }
        />
        <Route
          path="/updateItems/:id/:pID"
          element={
            <RequiredAuth>
              <UpdateItemPage />
            </RequiredAuth>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
