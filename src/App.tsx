import { HomePage } from './pages/HomePage'
import { HtmlCssPage } from './pages/HomePage/column_modules/htmlcssPage'
import { JsBasePage } from './pages/HomePage/column_modules/jsBasePage'
import { JsAdvancedPage } from './pages/HomePage/column_modules/jsAdvancedPage'
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
