import { HomePage } from './pages/Home'
import { HtmlCssPage } from './pages/htmlcss/index.tsx'
import { JsBasePage } from './pages/jsBase/index.tsx'
import { JsAdvancedPage } from './pages/jsAdvanced/index.tsx'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/htmlcss" element={<HtmlCssPage />} />
      <Route path="/jsbase" element={<JsBasePage />} />
      <Route path="/jsadvanced" element={<JsAdvancedPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
