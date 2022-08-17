import React, { useState } from 'react'
import DynamicPage from './components/DynamicPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Join from './components/Join'

export default function App() {

  const [template, setTemplate] = useState([])

  console.log(template)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DynamicPage setTemplate={setTemplate} template={template} />} />
          <Route path="/form" element={<Join template={template} setTemplate={setTemplate} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
