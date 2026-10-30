import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Panel from './pages/Panel';
import { siteContent } from './data/content';

export default function App() {
  return (
    <BrowserRouter>
      <Header brand={siteContent.brand} navigation={siteContent.navigation} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/painel"
          element={
            <PrivateRoute>
              <Panel />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer content={siteContent.footer} />
    </BrowserRouter>
  );
}
