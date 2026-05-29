import { HomePage } from './pages/HomePage';
import { HtmlCssPage } from './pages/htmlcssPage/htmlcssPage';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/htmlcss" element={<HtmlCssPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

