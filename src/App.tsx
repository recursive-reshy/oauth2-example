import { BrowserRouter, Routes, Route } from "react-router-dom"

// Contexts
import { ThemeProvider } from "./context"

// Pages
import { PageLogin } from "./pages"

function App() {

  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="oauth-eg-ui-theme"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLogin />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
