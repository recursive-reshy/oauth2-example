import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import { PageLogin } from "./pages"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
