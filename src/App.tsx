import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/layout/Layout';
import SwapPage from './pages/SwapPage';
import { PerpsPage } from './pages/PerpsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<SwapPage />} />
            <Route path="/perps" element={<PerpsPage />} />
            <Route path="/trade" element={<PerpsPage />} />
            <Route path="/operps" element={<PerpsPage />} />
            <Route path="/refer" element={<SwapPage />} />
            <Route path="/learn" element={<SwapPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;